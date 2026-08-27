// /api/ask.js
// Vercel serverless function — proxies "explain this question" / follow-up
// requests to Groq, keeping GROQ_API_KEY server-side only.
//
// Required env var (set in Vercel → Project → Settings → Environment Variables):
//   GROQ_API_KEY = <your key from console.groq.com>

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "openai/gpt-oss-120b";
const MAX_MESSAGE_LEN = 500;

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

Rules:
- Explain briefly WHY the correct answer is correct.
- If the student's answer was wrong and differs from the correct answer, briefly note why that choice is a common mistake — only mention this if it's actually wrong.
- Keep it SHORT: 2-4 sentences, roughly 60-90 words for the first explanation, similarly brief for any follow-up.
- Plain prose only — no markdown headers, no bullet lists, no numbered lists, no asterisks.
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
        max_tokens: 180,
        temperature: 0.4
      })
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text().catch(() => "");
      console.error("[api/ask] Groq error:", groqRes.status, errText);
      return res.status(502).json({ error: "Something went wrong. Try again." });
    }

    const data = await groqRes.json();
    const reply = data && data.choices && data.choices[0] && data.choices[0].message
      ? data.choices[0].message.content
      : null;

    if (!reply) {
      return res.status(502).json({ error: "Something went wrong. Try again." });
    }

    return res.status(200).json({ reply: reply.trim() });
  } catch (err) {
    console.error("[api/ask] Request failed:", err);
    return res.status(500).json({ error: "Something went wrong. Try again." });
  }
}
