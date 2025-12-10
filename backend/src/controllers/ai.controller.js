import { generateSummary } from "../services/ai.service.js";

export const summary = async (req, res) => {
  try {
    const { text } = req.body || null;
    const file = req.file || null;

    if (!text && !file) {
      throw new BadRequestError("Text or file is required");
    }

    const summary = await generateSummary(file, text);
    return res.status(200).json({
      success: true,
      message: "Summary generated successfully",
      summary,
    });
  } catch (error) {
    throw error;
  }
};
