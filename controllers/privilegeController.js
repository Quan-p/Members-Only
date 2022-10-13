const User = require('../models/userModel');

// Member
exports.member_get = (req, res, next) => {
    res.render('member_form', { title: 'Member Form', user: res.locals.currentUser});
}

exports.member_post = (req, res, next) => {
    res.render('member_form');
}
 
// Admin 
exports.admin_get = (req, res, next) => {
    res.render('admin_form');
}

exports.admin_post = (req, res, next) => {
    res.render('admin_form');
}