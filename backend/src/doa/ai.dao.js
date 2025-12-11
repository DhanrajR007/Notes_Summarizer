import Aisummary from "../model/aisummary.model.js";
import AiMcq from "../model/aiMcq.model.js";
import AiQus from "../model/aiQus.model.js";

export const createSummary = async (promptText, summaryText, userId) => {
  try {
    const summary = await Aisummary.create({
      promptText,
      summaryText,
      user: userId,
    });
    return summary;
  } catch (error) {
    throw error;
  }
};

export const createMcq = async (promptText, mcqText, userId) => {
  try {
    const mcq = await AiMcq.create({
      promptText,
      mcqText,
      user: userId,
    });
    return mcq;
  } catch (error) {
    throw error;
  }
};

export const createQus = async (promptText, qusText, userId) => {
  try {
    const qus = await AiQus.create({
      promptText,
      qusText,
      user: userId,
    });
    return qus;
  } catch (error) {
    throw error;
  }
};
