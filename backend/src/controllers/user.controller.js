import AiMcq from "../model/aiMcq.model.js";
import AiQus from "../model/aiQus.model.js";
import Aisummary from "../model/aisummary.model.js";

export const getAllNotes = async (req, res) => {
  try {
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authorized",
      });
    }

    const [summeries, mcqs, qus] = await Promise.all([
      Aisummary.find({ user: userId }),
      AiMcq.find({ user: userId }),
      AiQus.find({ user: userId }),
    ]);

    return res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      notes: {
        summeries,
        mcqs,
        qus,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
