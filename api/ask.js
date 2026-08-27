// /api/ask.js
// Vercel serverless function — proxies "explain this question" / follow-up
// requests to Groq, keeping GROQ_API_KEY server-side only.
//
// Required env var (set in Vercel → Project → Settings → Environment Variables):
//   GROQ_API_KEY = <your key from console.groq.com>

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "openai/gpt-oss-120b";
const MAX_MESSAGE_LEN = 500;

// Defensive cleanup for occasional model glitches: collapses accidental
// runs of spaces and normalizes line endings/excess blank lines. This never
// touches text inside ``` code ``` or `inline code` so identifiers and
// numeric literals are left untouched. We deliberately do NOT try to guess
// word boundaries inside glued-together text (e.g. inserting spaces at
// letter/digit or case transitions) — that's too easy to get wrong on real
// code, identifiers like s1/n2, or numbers like 3.33, and would trade one
// kind of corruption for another. Fixing the prompt is the real fix for
// glued words; this only cleans up the safe, unambiguous formatting noise.
function cleanReplyText(raw) {
  const text = String(raw).replace(/\r\n/g, "\n").trim();

  const parts = text.split(/(```[\s\S]*?```|`[^`\n]+`)/g);

  const fixed = parts.map((part, i) => {
    const isCode = i % 2 === 1; // odd indices are the captured code spans
    if (isCode) return part;
    return part
      .replace(/[ \t]{2,}/g, " ")   // collapse accidental double spaces
      .replace(/\n{3,}/g, "\n\n");  // cap blank-line runs at one
  }).join("");

  return fixed.trim();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  let body = req.body;
  // Some Vercel runtimes deliver req.body already parsed; guard for raw string bodies too.
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const {
    question,
    options,
    correctAnswer,
    givenAnswer,
    userMessage,
    history
  } = body;

  if (!question || !correctAnswer) {
    return res.status(400).json({ error: "Missing question or correctAnswer." });
  }

  let cleanUserMessage = null;
  if (userMessage != null) {
    if (typeof userMessage !== "string") {
      return res.status(400).json({ error: "Invalid userMessage." });
    }
    cleanUserMessage = userMessage.trim().slice(0, MAX_MESSAGE_LEN);
    if (!cleanUserMessage) cleanUserMessage = null;
  }

  const safeHistory = Array.isArray(history)
    ? history
        .filter(m => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
        .slice(-12) // keep the payload small; recent context is enough
        .map(m => ({ role: m.role, content: String(m.content).slice(0, 800) }))
    : [];

  const optionsText = Array.isArray(options) && options.length
    ? options.map(o => `- ${o}`).join("\n")
    : "(no options provided)";

  const systemPrompt = `You are a concise, friendly study tutor helping a student understand a quiz question.

Question: ${question}
Options:
${optionsText}
Correct answer: ${correctAnswer}
Student's answer: ${givenAnswer != null ? givenAnswer : "(not answered)"}

Identity (only mention this if the student directly asks who you are, who made you, or similar):
You were built by a fellow student at the Faculty of Computing, Federal University Dutse (FUD). The developer prefers to stay anonymous. This tool was made for students like the user — level 2 and beyond — to help them study.

Rules:
- Explain briefly WHY the correct answer is correct.
- If the student's answer was wrong and differs from the correct answer, briefly note why that choice is a common mistake — only mention this if it's actually wrong.
- Keep it SHORT: 2-4 sentences, roughly 60-90 words for the first explanation, similarly brief for any follow-up.
- Formatting: write in short paragraphs separated by a blank line (a real newline character between them, not just a space). If it helps clarity, use a short bulleted list with lines starting "- ". Wrap any code, variable names, or literal values (e.g. \`x\`, \`3\`, \`nextInt()\`) in single backticks, and use triple backticks for multi-line code. Use \`**bold**\` sparingly for a key term or the final answer, not for whole sentences. Never write two separate words or tokens with no space between them.
- Be encouraging but not condescending.
- If a follow-up question is unrelated to this quiz question, gently redirect back to the topic in one sentence instead of answering the unrelated thing.`;

  const messages = [
    { role: "system", content: systemPrompt },
    ...safeHistory
  ];

  if (cleanUserMessage) {
    messages.push({ role: "user", content: cleanUserMessage });
  } else {
    messages.push({ role: "user", content: "Briefly explain why the correct answer is right." });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error("[api/ask] GROQ_API_KEY is not set.");
    return res.status(500).json({ error: "AI tutor is not configured yet." });
  }

  try {
    const groqRes = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        max_tokens: 260,
        temperature: 0.4
      })
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text().catch(() => "");
      console.error("[api/ask] Groq error:", groqRes.status, errText);
      // TEMP DEBUG: surface the real status/reason so we can diagnose the
      // live failure. Revert to the generic message once resolved.
      return res.status(502).json({ error: `Groq ${groqRes.status}: ${errText.slice(0,300)}` });
    }

    const data = await groqRes.json();
    const reply = data && data.choices && data.choices[0] && data.choices[0].message
      ? data.choices[0].message.content
      : null;

    if (!reply) {
      return res.status(502).json({ error: "Something went wrong. Try again." });
    }

    return res.status(200).json({ reply: cleanReplyText(reply) });
  } catch (err) {
    console.error("[api/ask] Request failed:", err);
    return res.status(500).json({ error: "Something went wrong. Try again." });
  }
}
