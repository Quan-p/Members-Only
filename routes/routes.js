const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signupController');
const loginController = require('../controllers/loginController');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Homepage' });
});

router.get('/sign-up', signupController.signup_get);
router.post('/sign-up', signupController.signup_post);

router.get('/login', loginController.login_get);
router.post('/login', loginController.login_post);

module.exports = router;