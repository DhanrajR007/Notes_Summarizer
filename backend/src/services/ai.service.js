import { uploadFile } from "../database/imagekit.db.js";
import { createMcq, createQus, createSummary } from "../doa/ai.dao.js";
import { generate } from "./gemini.service.js";
import { mcqPrompt, questionPrompt, summaryPrompt } from "../utils/helper.js";

export const generateSummary = async (file, text, userId) => {
  try {
    let fileUrl = null;
    if (file) {
      fileUrl = await uploadFile(file);
    }
    const prompt = summaryPrompt();
    const summary = await generate(file, text, prompt);
    const data = await createSummary(text || fileUrl, summary.data, userId);
    return data;
  } catch (error) {
    throw error;
  }
};
export const generateMCQ = async (file, text, userId) => {
  try {
    let fileUrl = null;
    if (file) {
      fileUrl = await uploadFile(file);
    }
    const prompt = mcqPrompt();
    const mcq = await generate(file, text, prompt);
    const data = await createMcq(text || fileUrl, mcq.data, userId);
    return data;
  } catch (error) {
    throw error;
  }
};
export const generateQuestion = async (file, text, userId) => {
  try {
    let fileUrl = null;
    if (file) {
      fileUrl = await uploadFile(file);
    }
    const prompt = questionPrompt();
    const question = await generate(file, text, prompt);
    const data = await createQus(text || fileUrl, question.data, userId);
    return data;
  } catch (error) {
    throw error;
  }
};
