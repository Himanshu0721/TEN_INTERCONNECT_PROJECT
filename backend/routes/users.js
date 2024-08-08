const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const express = require("express");
const Joi = require("joi");
const { User, validate } = require("../models/user");
const router = express.Router();
const isAuthenticated = require("../middlewares/authCheck");
const passport = require("passport");
const passportLocal = require("passport-local");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");
const fetchuser = require("../middlewares/fetchuser");

router.post(
  "/login",
  passport.authenticate("local"),
  (request, response, next) => {
    // STEP 1: Check if user is already authenticated
    console.log("Login request processed");
    if (request.isAuthenticated()) {
      console.log("You are authorised");
      const data = {
        user: {
          id: request.user.id,
        },
      };
      const authtoken = jwt.sign(data, "cat");
      return response.status(200).json({ authtoken });
    }
    return response.status(400).json("Login Failed!");
  }
);

router.get("/login/verify", fetchuser, async (request, response) => {
  console.log("Authenticated user : ", request.user);
  const { id } = request.user;
  const user = await User.findById(id);
  response.status(200).json({ user });
});

router.get("/me", fetchuser, async (request, response) => {
  console.log("Authenticated user : ", request.user);
  const { id } = request.user;
  const user = await User.findById(id)
  response.status(200).json({ user });
});

router.post("/register", async (req, res) => {
  let success = false;
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        success,
        error: "Sorry, a user with this email already exists",
      });
    }

    if (!req.body.userName) {
      console.log("Username is required");
      return res.status(400).json({
        success,
        error: "Username is required",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: secPass,
      email: req.body.email,
      username: req.body.userName,
    });

    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, "cat");

    success = true;
    res.json({ success, authtoken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

router.get("/profile", (request, response) => {
  console.log("hello profile");
  console.log("Authenticated user : ", request.user);
  if (request.isAuthenticated()) {
    return response.redirect(
      process.env.REACT_APP_SERVER_URL + "/user/Profile"
    );
  } else {
    return response.redirect(process.env.REACT_APP_SERVER_URL + "/user/login");
  }
});

router.post(
  "/register/email",
  passport.authenticate("magiclink", {
    action: "requestToken",
    failureRedirect: process.env.REACT_APP_SERVER_URL + "/user/register",
  }),
  (request, response, next) => {
    console.log("Signup request received.");
    response.redirect("/user/register/email/check");
    // response.send('Please verify your email address to activate account');
  }
);

router.get("/register/email/check", function (request, response, next) {
  // response.render('user/login/email/check');
  response.send("Please verify your email address to activate account");
});

// Verify Registered Email
router.get(
  "/register/email/verify",
  passport.authenticate("magiclink", {
    successReturnToOrRedirect: "/",
    failureRedirect: process.env.REACT_APP_SERVER_URL + "/user/register",
  })
);

router.post("/logout", (request, response) => {
  request.logout(err => {
    if (err) {
      return next(err);
    }
    response.redirect(process.env.REACT_APP_SERVER_URL);
  });
});

module.exports = router;
