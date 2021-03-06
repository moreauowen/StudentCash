const express = require("express");
const router = express.Router();

const User = require("../../models/userSchema.js");
const Income = require("../../models/incomeSchema.js");
const Expense = require("../../models/expenseSchema.js");

const bcrypt = require("bcrypt");
const passport = require("passport");


// @route POST api/users/login
// @desc Login user and verify using passport
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) res.status(404).json({ message: err, valid: false });
    if (!user)
      res.status(404).json({
        message: "Please check email and password and try again.",
        valid: false,
      });
    else {
      req.login(user, (err) => {
        if (err) res.status(404).json({ message: err, valid: false });
        res
          .status(200)
          .json({ message: "Successfully logged in.", valid: true });
      });
    }
  })(req, res, next);
});


// @route POST api/users/register
// @desc Register user
router.post("/register", async (req, res) => {
  // Define filters to query database
  const userEmailFilter = { email: req.body.email };

  let error = {};
  try {
    const user = await User.findOne(userEmailFilter);
    if (user) {
      error.msg = `User with this email already exists.`;
      res.status(400).json(error);
      return;
    }

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      email: req.body.email,
    });

    // Hash password before storing in database
    const rounds = 10;
    bcrypt.genSalt(rounds, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((newUser) => {
            // User created
            res.json(newUser);
          })
          .catch((err) => {
            console.log(err);
            error.msg = `Username cannot contain spaces, underscores, or other special characters`;
            res.status(400).json(error);
            return;
          });
      });
    });
  } catch (error) {
    error.msg = `Error when registering user`;
    res.status(400).json(error);
  }
});


router.post("/get-income", async (req, res) => {
  const findUserFilter = { email: req.user.email };
  if (req.user) {
    User.findOne(findUserFilter, (err, user) => {
        if (!user) {
          res.status(400).json({
            msg: "Email does not exist.",
          });
        } else {
          // Get income from ObjectIds in user.incomes
          Income.find({ _id: { $in: user.incomes }})
            .then(results => {
              res.status(200).json(results);
            })
        }
      }
    )
  } else {
    res.status(400).json({
      msg: "Please login before doing this.",
    });
  }
});


router.post("/get-expenses", async (req, res) => {
  const findUserFilter = { email: req.user.email };
  if (req.user) {
    User.findOne(findUserFilter, (err, user) => {
        if (!user) {
          res.status(400).json({
            msg: "Email does not exist.",
          });
        } else {
          // Get expenses from ObjectIds in user.expenses
          Expense.find({ _id: { $in: user.expenses }})
            .then(results => {
              res.status(200).json(results);
            })
        }
      }
    )
  } else {
    res.status(400).json({
      msg: "Please login before doing this.",
    });
  }
});


// @route POST api/users/reset
// @desc Register user
router.post("/reset", async (req, res) => {
  if (req.user) {
    User.findOne(
      {
        email: req.user.email,
      },
      function (err, doc) {
        if (!doc) {
          res.status(400).json({
            msg: "Email does not exist.",
          });
        } else {
          bcrypt.compare(req.body.currentPassword, doc.password).then((result) => {
            if (result === true) {
              bcrypt
                .hash(req.body.newPassword, 10)
                .then((hash) => {
                  doc.password = hash;
                  doc.save();
                  res.status(200).json({
                    msg: "Password reset successfully.",
                    valid: true,
                  });
                })
                .catch((err) => {
                  res.status(400).json({
                    msg: "Error resetting password.",
                    valid: false,
                  });
                });
            } else {
              res.status(400).json({
                msg: "Current password is invalid.",
                valid: false,
              });
            }
          })
        }
      }
    )
  } else {
    res.status(400).json({
      msg: "Please login before doing this.",
    });
  }
});

// @route POST api/users/session
// @desc Check if a user's session is valid
router.post("/session", async (req, res) => {
  if (req.user){
    res.status(200).json({
      msg: "Session is valid",
      valid: true
    })
  } else {
    res.status(400).json({
      msg: "Session is invalid, please login.",
      valid: false
    })
  }
})

// @route POST api/users/delete
// @desc Delete a users account
router.post("/delete", async (req, res) => {
  if (req.user) {
    try {
      User.findByIdAndDelete(req.user._id, function (err, doc) {
        if (err) res.status(400).json({msg: err});
        else {
          req.logout();
          res.status(200).json({msg: "Account deleted successfully."});
        }
      })
    } catch {
      res.status(400).json({
        msg: "Error deleting account, please try again later."
      });
    }
  } else {
    res.status(400).json({
      msg: "Please login before doing this."
    });
  }
})

module.exports = router;
