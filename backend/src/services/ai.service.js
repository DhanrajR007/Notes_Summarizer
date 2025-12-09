import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export async function generateSummary(text) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: text,
  });
  return response.text;
}
