const User = require('../models/userModel');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

exports.signup_get = (req, res, next) => {
    res.render('signup-form', { title: "Sign Up Form"});
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
        .withMessage('Username must be at least 6 characters'),
        
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          console.log("ERROR!");
          return res.render("signup_form", { title: "Sign Up", passwordConfirmationError: "Passwords must be the same" });
        } 

        try {
            bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
            if (err) return next(err);

            const user = new User({
                username: req.body.username,
                password: hashedPassword
            }).save(err => err ? next(err) : res.redirect("/"));
            });
            // if err, do something
            // otherwise, store hashedPassword in DB
        } catch (err) {
            return next(err);
        }
    }
    
    
    
];

// exports.signup_post = [
//     body('username')
//         .trim()
//         .isLength({ min: 1 })
//         .escape()
//         .withMessage('Username must be at least 3 characters'),
//     body('password')
//         .trim()
//         .isLength({ min: 1 })
//         .escape()
//         .withMessage('Username must be at least 6 characters'),  
//     body('confirmPassword')
//         .trim()
//         .isLength({ min: 1 })
//         .escape()
//         .withMessage('Username must be at least 6 characters'),

//         (req, res, next) => {
//             // Extract the validation errors from a request.
//             const errors = validationResult(req);
        
//             if (!errors.isEmpty()) {
//               // There are errors. Render form again with sanitized values/errors messages.
//               res.render("signup-form", {
//                 username: req.body.username,
//                 password: req.body.password,
//                 errors: errors.array(),
//               });
//               return;
//             }
//             // Data from form is valid.
        
//             // Create an Author object with escaped and trimmed data.
//             const user = new User({
//                 username: req.body.username,
//                 password: req.body.password,
//                 member: false,
//                 admin: false,
//             });
//             author.save((err) => {
//               if (err) {
//                 return next(err);
//               }
//               // Successful - redirect to new author record.
//               res.redirect('/');
//             });
//           },
//         // .custom(async (value, { req }) => {
//         //     if (value !== req.body.password) throw new Error('Password confirmation does not match password');
//         //     // Indicates the success of this synchronous custom validator
//         //     return true;
//         //   }),
//           // async (req, res, next) => {
            
//             // const errors = validationResult(req);
//             // if (!errors.isEmpty()) {
//             //   console.log("ERROR!");
//             //   return res.render("signup-form", { title: "Sign Up", passwordConfirmationError: "Passwords must be the same" });
//             // }
        
//             // try {
//             //   const isUserInDB = await User.find({ "username": req.body.username });
//             //   if (isUserInDB.length > 0) return res.render("signup-form", { title: "Sign Up", error: "User already exists" });
//             //   // If username does not exist, continute to register new user to db
//             //   bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
//             //     if (err) return next(err);
//             //     const user = new User({
//             //       username: req.body.username,
//             //       password: hashedPassword,
//             //       member: false,
//             //       admin: false,
//             //       avatar: req.body.avatar,
//             //     }).save(err => {
//             //         if (err) { 
//             //           return next(err);
//             //         }
//             //         res.redirect("/");
//             //       });
//             //   });
//             // } catch (err) {
//             //   return next(err);
//             // }
//           //}    
// ];
