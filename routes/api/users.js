const express = require("express");
const router = express.Router();
const User = require("../../models/userSchema.js");
const bcrypt = require("bcrypt");
const passport = require("passport");

// @route POST api/users/profile
// @desc Get user data based on email
router.post("/profile", (req, res, next) => {
  // Get email from req.body
  // User.findOne( email )
  // Return user data
});

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

// @route POST api/users/reset
// @desc Register user
router.post("/reset", async (req, res) => {
  User.findOne(
    {
      email: request.session.user.email,
    },
    function (err, doc) {
      if (!doc) {
        response.status(400).json({
          message: "Email does not exist.",
        });
      } else {
        bcrypt
          .compare(request.body.currentPassword, doc.password)
          .then((res) => {
            if (res === true) {
              bcrypt
                .hash(request.body.newPassword, 10)
                .then((hash) => {
                  doc.password = hash;
                  doc.save();
                })
                .catch((err) => {
                  response.status(400).json({
                    message: "Error resetting password.",
                  });
                });
            } else {
              response.status(400).json({
                message: "Invalid password.",
              });
            }
          });
      }
    }
  ).catch((err) => {
    response.status(400).json({
      message: err,
    });
  });
});

module.exports = router;
