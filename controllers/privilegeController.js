const User = require('../models/userModel');
const { body, validationResult } = require('express-validator');

// Member
exports.member_get = (req, res, next) => {
    res.render('member_form', { title: 'Member Form', user: res.locals.currentUser});
}

exports.member_post = [
    body('memberCode').trim().isLength({ min: 1 }).escape().withMessage('Password must be specified'),

    async(req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.render('member_form', { title: 'Member Form', user: res.locals.currentUser, errors: errors.array() });
        } else if (req.body.memberCode != process.env.MEMBER_PASSCODE) {
            return res.render('member_form', { title: 'Member Form', user: res.locals.currentUser, passwordError: 'Incorrect Password' });
        }

        const updateUser = await User.findOne(res.locals.currentUser);
        updateUser.member = true;

        await updateUser.save(err => {
            if(err) return next(err);
            console.log(updateUser);
            res.redirect('/member');
        });
    }
]
 
// Admin 
exports.admin_get = (req, res, next) => {
    res.render('admin_form');
}

exports.admin_post = (req, res, next) => {
    res.render('admin_form');
}