require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");

const users = require('./routes/api/users');
const expenses = require('./routes/api/expenses');
const incomes = require('./routes/api/incomes');
const app = express();

console.log("----- [SERVER] -----");
if (process.env.NODE_ENV === "development") {
  console.log("[SERVER] This server is in DEVELOPMENT mode!");
}

// Bodyparser middleware for routes to accept JSON
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Passport middleware
// Utilizes MongoDB for session storage
const cookieLife = 1000 * 60 * 60 * 24;
app.use(
  session({
    secret: process.env.APP_SECRET,
    saveUninitialized: true,
    resave: false,
    store: MongoStore.create({
      mongoUrl: process.env.DBURI,
      ttl: cookieLife,
      autoRemove: "native",
      crypto: {
        secret: process.env.APP_SECRET,
      },
    }),
  })
);

// Connect to MongoDB
const mongodb_conn = process.env.MONGODB_URI || process.env.DBURI; // UPDATE THIS
mongoose
  .connect(mongodb_conn, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    console.log(`[SERVER] MongoDB successfully connected [${mongodb_conn}]`)
  )
  .catch((err) => console.log(err));

// To get rid of annoying Mongoose deprecation warnings
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

// Passport middleware
app.use(cookieParser(process.env.APP_SECRET));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

// Routes Configuration
app.use('/api/users', users);
app.use('/api/expenses', expenses);
app.use('/api/incomes', incomes);

// Check if application is in production
if (process.env.NODE_ENV === "production") {
  //console.log("[SERVER] Now using express.static(client/build)");
  app.use(express.static("client/build"));

  // If no backend routes are hit, send React client app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`[SERVER] Server up and running on port ${port}`);
});
