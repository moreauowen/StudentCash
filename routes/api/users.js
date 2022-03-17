// DEFINE LOGIN / LOGOUT POG CONTENT AND REGISTER
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

    let res_errors = {};

    User.findOne(userFilter).then(user => {
        if (!user) {
            res_errors.email = `Email ${userFilter.email} not found`;
            res.status(404).json(res_errors);
            return;
        }
        // } else if (user && !user.confirmed) {
        //     res_errors.email = `User with ${userFilter.email} must be confirmed, check email`;
        //     res.status(403).json(res_errors);
        //     return;
        // }

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
                res_errors.passwordincorrect = `Password incorrect`;
                res.status(400).json(res_errors);
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
    const usernameFilter = { username: req.body.username };

    let res_errors = {};
    
    try {
        const user = await User.findOne(userEmailFilter);
        if (user && !user.confirmed) {
            res_errors.email = msgs.confirm;
            res.status(400).json(res_errors);
            return;

        } else if (user && user.confirmed) {
            res_errors.email = msgs.alreadyConfirmed;
            res.status(400).json(res_errors);
            return;
        }

        const user2 = await User.findOne(usernameFilter);
        if (user2) {
            res_errors.username = `Username ${user2.username} already exists - must be unique`;
            res.status(400).json(res_errors);
            return;
        }

        var newUser;

        // This makes the User document already confirmed if in development (doesn't send email)
        if(process.env.NODE_ENV === 'development'){
            newUser = new User({
                password: req.body.password,
                email: req.body.email
            });
        } else {
            newUser = new User({
                password: req.body.password,
                email: req.body.email
            });
        }

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
                        res_errors.username = `Username cannot contain spaces, underscores, or other special characters`;
                        res.status(400).json(res_errors);
                        return;
                    });
            });
        });

    } catch(error) {
        console.log(error);
        res_errors.badrequest = `Error when registering user, email contact@rosters.gg`;
        res.status(400).json(res_errors);
    }
});

module.exports = router;

