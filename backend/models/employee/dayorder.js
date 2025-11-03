const mongoose = require("mongoose");

const dayOrdersSchema = new mongoose.Schema(
  {
    emp_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    ordered_breakfast: {
      type: Boolean,
      default: false,
    },
    ordered_lunch: {
      type: Boolean,
      default: false,
    },
    ordered_snack: {
      type: Boolean,
      default: false,
    },
    served_breakfast: {
      type: Boolean,
      default: false,
    },
    served_lunch: {
      type: Boolean,
      default: false,
    },
    served_dinner: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Create a compound index to ensure one order per employee per day
dayOrdersSchema.index({ emp_id: 1, date: 1 }, { unique: true });

module.exports = mongoose.model("DayOrders", dayOrdersSchema);