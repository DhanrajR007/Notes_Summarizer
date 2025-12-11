import { generateMCQ, generateSummary } from "../services/ai.service.js";
import { generate } from "../services/gemini.service.js";

export const summary = async (req, res) => {
  try {
    const { text } = req.body || null;
    const file = req.file || null;

    if (!text && !file) {
      throw new BadRequestError("Text or file is required");
    }

    const summary = await generateSummary(file, text, req.user.id);
    return res.status(200).json({
      success: true,
      message: "Summary generated successfully",
      summary,
    });
  } catch (error) {
    throw error;
  }
};
export const MCQ = async (req, res) => {
  try {
    const { text } = req.body || null;
    const file = req.file || null;

    if (!text && !file) {
      throw new BadRequestError("Text or file is required");
    }

    const mcq = await generateMCQ(file, text, req.user.id);
    return res.status(200).json({
      success: true,
      message: "MCQ generated successfully",
      mcq,
    });
  } catch (error) {
    throw error;
  }
};
export const question = async (req, res) => {
  try {
    const { text } = req.body || null;
    const file = req.file || null;

    if (!text && !file) {
      throw new BadRequestError("Text or file is required");
    }
    const question = await generateQuestion(file, text, req.user.id);
    return res.status(200).json({
      success: true,
      message: "Question generated successfully",
      question,
    });
  } catch (error) {
    throw error;
  }
};
