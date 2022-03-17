const express = require('express');
const router = express.Router();
const User = require('../../models/userSchema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @route POST api/users/login
// @desc Login user and return JWT token
router.post('/login', (req, res) => {

    // Form validation to ensure email and password are entered
    // const { errors, isValid } = validateLoginInput(req.body);
    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

    // Define filter for querying database
    const userFilter = { email: req.body.email};
    const password = req.body.password;

    let error = {};

    User.findOne(userFilter).then(user => {
        if (!user) {
            error.msg = `Email not found`;
            res.status(404).json(error);
            return;
        }

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    username: user.username
                };

                // Sign token
                jwt.sign(payload,
                    'secret',
                    { expiresIn: 31556926 },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token
                        });
                    }
                );
                
            } else {
                error.msg = `Password incorrect`;
                res.status(400).json(error);
                return;
            }
        });
    });
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

