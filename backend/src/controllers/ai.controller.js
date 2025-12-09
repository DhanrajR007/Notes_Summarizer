import { generateSummary } from "../services/ai.service.js";

export const summary = async (req, res) => {
  try {
    const text = req.body;
    const file = req.file;
    console.log(file);
    // if (!text) {
    //     throw new BadRequestError("Text is required");
    // }
    // const summary = await generateSummary(text);
    return res.status(200).json({
      success: true,
      message: "Summary generated successfully",
      file,
    });
  } catch (error) {
    throw error;
  }
};
