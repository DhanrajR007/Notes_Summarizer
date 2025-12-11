import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
export const generate = async (file, text, prompt) => {
  const contents = [];

  if (file) {
    // PDF upload hua
    contents.push({ text: prompt }); // instruction
    contents.push({
      inlineData: {
        mimeType: "application/pdf",
        data: file.buffer.toString("base64"),
      },
    });
  } else if (text) {
    // Direct text
    contents.push({ text: prompt }); // instruction
    contents.push({ text: text });
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
    });

    return { data: response.text };
  } catch (err) {
    throw err;
  }
};
