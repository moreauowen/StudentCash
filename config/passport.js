const bcrypt = require("bcryptjs");
const User = require("../models/userSchema");
const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      function (username, password, done) {
        User.findOne({ email: username }, (err, user) => {
          if (err) throw err;
          if (!user) return done(null, false);
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err;
            if (result === true) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        });
      }
    )
  );

  passport.serializeUser((user, callback) => {
    callback(null, user.id);
  });

  passport.deserializeUser((id, callback) => {
    User.findOne({ _id: id }, (err, user) => {
      callback(err, user);
    });
  });
};