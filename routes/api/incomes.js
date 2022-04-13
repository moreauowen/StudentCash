const express = require('express');
const router = express.Router();
const Income = require('../../models/incomeSchema.js');


// @route POST api/incomes/create
// @desc Create income
router.post("/create", async (req, res) => {
    
    // Input validation
    // TODO - add input validation here

    // Parse request body
    const newName = req.body.income_name;
    const newValue = req.body.income_value;

    try {
        // Create income object
        const income = new income({
            name: newName,
            value: newValue,
        });

        // Save to database
        const new_income = await income.save();
        res.status(200).json(`Success, income was created!`);

    } catch(createincomeError) {
        console.log(createincomeError);
    }
});

// @route GET api/incomes/:id
// @desc Get income based on its ID
router.get("/:id", async (req, res) => {

    // Parse request parameters
    const incomeId = req.params.id;
    const incomeFilter = { _id: incomeId };

    try {
        // Get income object
        const income = await income.findOne(incomeFilter);
        if (!income) {
            res.status(404).json('income not found');
            return;
        }
        res.status(200).json(income);

    } catch(getincomeError) {
        console.log(getincomeError);
    }
});

module.exports = router;
