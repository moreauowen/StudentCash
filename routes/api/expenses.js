const express = require('express');
const router = express.Router();
const Expense = require('../../models/expenseSchema.js');
const User = require('../../models/userSchema.js');


// @route POST api/expenses/create
// @desc Create expense
router.post("/create", async (req, res) => {
    const findUserFilter = { email: req.user.email };
    if (req.user) {
      User.findOne(findUserFilter, async (err, user) => {
        if (!user) {
          res.status(400).json({ msg: "User does not exist." });
          return;
  
        } else {
          // Create new expense
          const newName = req.body.expense_name;
          const newValue = req.body.expense_value;
  
          try {
            // Create expense object
            const expense = new Expense({
              name: newName,
              value: newValue,
            });
  
            // Save to database
            const newExpense = await expense.save();
            const expenseId = newExpense._id;
  
            // Add to user document
            user.expenses.push(expenseId);
            user.save();
            res.status(200).json({ msg: "Successfully created expense."});
  
          } catch(createExpenseError) {
              console.log(createExpenseError);
          }
        }
      });
    } else {
      res.status(400).json({ msg: "Please login before doing this." });
    }    
});


// @route GET api/expenses/:id
// @desc Get expense based on its ID
router.get("/:id", async (req, res) => {

    // Parse request parameters
    const expenseId = req.params.id;
    const expenseFilter = { _id: expenseId };

    try {
        // Get Expense object
        const expense = await Expense.findOne(expenseFilter);
        if (!expense) {
            res.status(404).json('Expense not found');
            return;
        }
        res.status(200).json(expense);

    } catch(getExpenseError) {
        console.log(getExpenseError);
    }
});

module.exports = router;
