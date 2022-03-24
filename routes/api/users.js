const express = require('express');
const router = express.Router();
const User = require('../../models/userSchema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require("passport");

// @route POST api/users/login
// @desc Login user and verify using passport
router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user) => {
      if (err) res.status(404).json({message: err, valid: false});
      if (!user) res.status(404).json({message: "Please check email and password and try again.", valid: false});
      else {
        req.login(user, (err) => {
          if (err) res.status(404).json({message: err, valid: false})
          res.status(200).json({ message: "Successfully logged in.", valid: true });
        });
      }
    })(req, res, next);
  });

// @route POST api/users/register
// @desc Register user
router.post('/register', async (req, res) => {

    // Form validation to ensure no fields are empty and that passwords match
    // const { errors, isValid } = validateRegisterInput(req.body);
    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

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
            email: req.body.email
        });

        // Hash password before storing in database
        const rounds = 10;
        bcrypt.genSalt(rounds, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(newUser => {
                        // User created
                        res.json(newUser);
                    })
                    .catch(err => {
                        console.log(err);
                        error.msg = `Username cannot contain spaces, underscores, or other special characters`;
                        res.status(400).json(error);
                        return;
                    });
            });
        });

    } catch(error) {
        error.msg = `Error when registering user`;
        res.status(400).json(error);
    }
});

module.exports = router;

