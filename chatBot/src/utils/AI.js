const getAIReply = async (message) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const body = JSON.stringify({
    contents: [{ role: "user", parts: [{ text: message }] }],
    systemInstruction: {
      parts: [
        {
          text: "You are a helpful assistant for digital literacy. Answer simply and step-by-step.",
        },
      ],
    },
    generationConfig: { maxOutputTokens: 200, temperature: 0.7 },
  });

  try {
    if (!apiKey) {
      console.error("API key is missing. Make sure VITE_GEMINI_API_KEY is set in your .env file.");
      return "Configuration error: API key is missing.";
    }
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });

    const data = await response.json();
    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Something went wrong!"
    );
  } catch (err) {
    return "Sorry, couldn't connect to the AI.";
  }
};

export default getAIReply;
