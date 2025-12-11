import mongoose from "mongoose";

const aiQusSchema = new mongoose.Schema(
  {
    promptText: {
      type: String,
      required: true,
    },
    qusText: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const AiQus = mongoose.model("AiQus", aiQusSchema);

export default AiQus;
