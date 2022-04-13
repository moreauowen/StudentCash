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
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Income = mongoose.model("Incomes", incomeSchema);

module.exports = Income;
