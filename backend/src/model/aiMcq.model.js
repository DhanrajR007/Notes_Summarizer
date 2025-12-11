import mongoose from "mongoose";

const aiMcqSchema = new mongoose.Schema(
  {
    promptText: {
      type: String,
      required: true,
    },
    mcqText: {
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

const AiMcq = mongoose.model("AiMcq", aiMcqSchema);

export default AiMcq;
