const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incomeSchema = new Schema(
  {
    date: {
        type: Date,
        default: Date.now(),
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Double,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const income = mongoose.model("incomes", incomeSchema);

module.exports = income;
