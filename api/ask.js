// /api/ask.js
// Vercel serverless function — proxies "explain this question" / follow-up
// requests to Groq, keeping GROQ_API_KEY server-side only.
//
// Required env var (set in Vercel → Project → Settings → Environment Variables):
//   GROQ_API_KEY = <your key from console.groq.com>

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "openai/gpt-oss-120b";
const MAX_MESSAGE_LEN = 500;

import { detailedExplanations } from "./explanations.js";

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
    id,
    code,
    explanation,
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

  // Prefer the rich, hand-written explanation matched by exact question id.
  // Fall back to the plain one-liner from the quiz bank if no match exists
  // (e.g. for questions not yet covered in detailedExplanations).
  const matched = id ? detailedExplanations[id] : null;
  let groundingText = "";
  if (matched && matched.detail) {
    groundingText = matched.detail;
    if (matched.follow) {
      groundingText += `\n\nIf the student asks a natural follow-up on this topic: ${matched.follow}`;
    }
  } else if (explanation) {
    groundingText = explanation;
  }

  const systemPrompt = `You are a concise, friendly study tutor helping a student understand a quiz question.

Question: ${question}
${code ? `Code:\n\`\`\`\n${code}\n\`\`\`\n` : ""}Options:
${optionsText}
Correct answer: ${correctAnswer}
Student's answer: ${givenAnswer != null ? givenAnswer : "(not answered)"}
${groundingText ? `\nInternal reasoning (for your own grounding only — do NOT quote or repeat this verbatim; understand it and explain it in your own words and style):\n${groundingText}\n` : ""}
Identity (only mention this if the student directly asks who you are, who made you, or similar):
You were built by a fellow student at the Faculty of Computing, Federal University Dutse (FUD). The developer prefers to stay anonymous. This tool was made for students like the user — level 2 and beyond — to help them study.

Rules:
- Explain WHY the correct answer is correct.
- If the student's answer was wrong and differs from the correct answer, briefly note why that choice is a common mistake — only mention this if it's actually wrong.
- Be specific, not vague: trace through the actual variable names and values involved, and name the exact operator or method doing the work (e.g. say "\`.equals()\` compares the actual characters in the string, not whether they're the same object" — not "the expression evaluates to true because the values match"). A student should be able to picture exactly what's happening, not just be told the result.
- If an Internal reasoning section is given above, use it to make sure you have the facts right, but never copy its wording — always explain it fresh, in your own voice.
- Keep it focused: 4-8 sentences, roughly 120-180 words for the first explanation, similarly sized for follow-ups. Use the extra room for a real walkthrough of the logic, not padding or repetition.
- Don't repeat yourself across a conversation: check the history above before replying. If the student is following up (e.g. asking "why" again or pushing back), that usually means the last answer didn't land — go deeper, use a concrete example, or explain the specific mechanism they seem to be missing, rather than rephrasing what you already said.
- Formatting: write in short paragraphs separated by a blank line (a real newline character between them, not just a space). If it helps clarity, use a short bulleted list with lines starting "- ". Wrap any code, variable names, or literal values (e.g. \`x\`, \`3\`, \`nextInt()\`) in single backticks, and use triple backticks for multi-line code. Use \`**bold**\` sparingly for a key term or the final answer, not for whole sentences. Never write two separate words or tokens with no space between them.
- Personality: a little wit is welcome — a light analogy, a playful aside, a small joke — as long as it's brief and doesn't get in the way of the actual explanation. Never force a joke if nothing natural fits; clarity always comes first.
- Be encouraging but not condescending.
- If a Code section is given above, base your explanation strictly on those exact lines — never invent, assume, or substitute different code, variable names, or values. If no Code section is given, explain using only the question and options, and do not make up a hypothetical code snippet.
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
        max_tokens: 480,
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
