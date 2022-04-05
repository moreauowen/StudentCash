const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const expenseSchema = ("./expenses");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // income: [incomeSchema],
    expenses: [expenseSchema],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
