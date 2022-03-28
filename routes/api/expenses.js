const express = require('express');
const router = express.Router();
const Expense = require('../../models/expenseSchema.js');


// @route POST api/expenses/create
// @desc Create expense
router.post("/create", async (req, res) => {
    
    // Input validation
    // TODO - add input validation here

    // Parse request body
    const newName = req.body.expense_name;
    const newValue = req.body.expense_value;

    try {
        // Create Expense object
        const expense = new Expense({
            name: newName,
            value: newValue,
        });

        // Save to database
        const new_expense = await expense.save();
        res.status(200).json(`Success, expense was created!`);

    } catch(createExpenseError) {
        console.log(createExpenseError);
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
