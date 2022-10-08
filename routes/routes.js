const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signupController');
const loginController = require('../controllers/loginController');
const messageController = require('../controllers/messageController');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Homepage' });
});

router.get('/sign-up', signupController.signup_get);
router.post('/sign-up', signupController.signup_post);

router.get('/login', loginController.login_get);
router.post('/login', loginController.login_post);
router.get('/logout', loginController.logout_get);

router.get('/create-message', messageController.create_message_get);
router.post('/create-message', messageController.create_message_post);

module.exports = router;