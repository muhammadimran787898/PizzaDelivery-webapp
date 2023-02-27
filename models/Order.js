import mongoose from "mongoose";

const OrederSchema = new mongoose.Schema(
  {
    cutomer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 220,
    },
    total: {
      type: Number,
      required: true,
    },
    satus: {
      type: Number,
      default: 0,
    },
    paymentmethod: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Oredr || mongoose.model("Order", OrederSchema);
