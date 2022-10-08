const passport = require('passport');

exports.login_get = (req, res, next) => {
    if(res.locals.currentUser) return res.redirect('/');
    res.render('login_form', { title: "Login Form"});
};

exports.login_post = (passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login"
    })
);

exports.logout_get = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
          return next(err);
        }
        res.redirect("/");
    });
}