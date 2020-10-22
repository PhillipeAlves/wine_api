const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

// === VIEW ENGINE SETUP ===

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// === ROUTING ===

app.use("/", require("./routes"));
app.use("/api/breakdown", require("./routes/api"));

// === ERROR HANDLING ===

// === CATCHES 404 AND FORWARDS TO ERROR HANDLER ===

app.use(function (req, res, next) {
  next(createError(404));
});

// === ERROR HANDLER ===

app.use(function (err, req, res, next) {
  // === SETS LOCALS, ONLY PROVIDING ERROR IN DEVELOPMENT ===
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // === RENDERS THE ERROR PAGE ===
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
