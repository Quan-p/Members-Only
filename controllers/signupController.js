const User = require('../models/userModel');
const { body, validationResult } = require('express-validator');

exports.signup_get = (req, res, next) => {
    res.render('signup-form', { title: "Sign Up Form"});
}
exports.signup_post = (req, res, next) => {
    res.send("NOT IMPLEMENTED: Sign Up POST");
  };