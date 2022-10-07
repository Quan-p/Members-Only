const User = require('../models/userModel');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

exports.signup_get = (req, res, next) => {
    res.render('signup_form', { title: "Sign Up Form"});
};

exports.signup_post = [
    body('username')
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage('Username must be at least 3 characters'),
    body('password')
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage('Password must be between 4 to 16 characters'),
    body('confirmPassword')
        .trim()
        .isLength({ min: 1 })
        .escape()
        .custom(async (value, { req }) => {
            const password = req.body.password;
            if(password !== value) {
                throw new Error('Passwords do not match');
            }
            
        }),    
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          console.log(errors);
          return res.render("signup_form", { title: "Sign Up Form", passwordCompareError: "Passwords must be the same" });
        } 

        try {
            const doesUserExist = await User.find({ 'username': req.body.username });
            if(doesUserExist.length > 0) {
                return res.render('signup_form', { title: 'Sign Up', error: 'Username already taken' });
            }
            bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
            if (err) return next(err);

            const user = new User({
                username: req.body.username,
                password: hashedPassword,
                member: false,
                admin: false,
                avatar: req.body.avatar
            }).save(err => err ? next(err) : res.redirect("/"));
            });
            // if err, do something
            // otherwise, store hashedPassword in DB
        } catch (err) {
            return next(err);
        }
    }
    
    
    
];