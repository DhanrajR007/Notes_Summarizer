import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});
export const generateSummary = async (file, text) => {
  console.log(file, text);
  const contents = [];

  if (file) {
    // PDF upload hua
    contents.push({ text: "Summarize this document" }); // instruction
    contents.push({
      inlineData: {
        mimeType: "application/pdf",
        data: file.buffer.toString("base64"),
      },
    });
  } else if (text) {
    // Direct text
    contents.push({ text: text });
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
    });

    return { summary: response.text };
  } catch (err) {
    console.error(err);
    throw err;
  }
};
