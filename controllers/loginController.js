const passport = require('passport');

exports.login_get = (req, res, next) => {
    res.render('login_form', { title: "Login Form"});
};
exports.login_post = (req, res, next) => {
    res.render('login_form', { title: "Login Form"});
};