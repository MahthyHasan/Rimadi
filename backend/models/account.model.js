import mongoose from "mongoose";

const accountSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    entryType: {
      type: String,
      enum: ["Income", "Expense"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["Cash", "Card", "Bank Transfer"],
      required: true,
    },
    reference: {
      type: String,
      default: "",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Account = mongoose.model("Account", accountSchema);

export default Account;
