const express = require('express');
const router = express.Router();
const Income = require('../../models/incomeSchema.js');


// @route POST api/incomes/create
// @desc Create income
router.post("/create", async (req, res) => {

  const findUserFilter = { email: req.user.email };
  if (req.user) {
    User.findOne(findUserFilter, (err, user) => {
        if (!user) {
          res.status(400).json({
            msg: "Email does not exist.",
          });
        } else {
            // Create new income
            const newName = req.body.income_name;
            const newValue = req.body.income_value;

            try {
                // Create income object
                const income = new Income({
                    name: newName,
                    value: newValue,
                });

                // Save to database
                let incomeId = "";
                income.save()
                    .then(newIncome => {
                        incomeId = newIncome._id;
                    });
                console.log(`Success, income was created!`);

                // Add to user document
                user.incomes.push(incomeId);
                user.save();
                res.status(200).json({ msg: "Success!"});

            } catch(createincomeError) {
                console.log(createincomeError);
            }
        }
      }
    )
  } else {
    res.status(400).json({
      msg: "Please login before doing this.",
    });
  }
    // Input validation
    // TODO - add input validation here

    
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
