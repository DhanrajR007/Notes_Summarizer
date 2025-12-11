import mongoose from "mongoose";

const aiSummarySchema = new mongoose.Schema(
  {
    promptText: {
      type: String,
      required: true,
    },
    summaryText: {
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

const Aisummary = mongoose.model("Aisummary", aiSummarySchema);

export default Aisummary;
