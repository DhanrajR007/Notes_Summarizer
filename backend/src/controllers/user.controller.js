import AiMcq from "../model/aiMcq.model.js";
import AiQus from "../model/aiQus.model.js";
import Aisummary from "../model/aisummary.model.js";

export const getAllNotes = async (req, res) => {
  const user = req.user;
  if (!user) {
    throw new Error("User not found");
  }
  const notes = [
    {
      summeries: {
        value: await Aisummary.find({ user: user._id }),
      },
      mcqs: {
        value: await AiMcq.find({ user: user._id }),
      },
      qus: {
        value: await AiQus.find({ user: user._id }),
      },
    },
  ];

  return res.status(200).json({
    success: true,
    message: "Notes fetched successfully",
    notes,
  });
};
