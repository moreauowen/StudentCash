const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    // BELOW WE WILL IMPLEMENT IN A DIFFERENT SPRINT
    // income: [incomeSchema],
    // expenses: [expenseSchema],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;