const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController')
const signupController = require('../controllers/signupController');
const loginController = require('../controllers/loginController');
const messageController = require('../controllers/messageController');
const privilegeController = require('../controllers/privilegeController');

router.get('/', indexController.index);

router.get('/sign-up', signupController.signup_get);
router.post('/sign-up', signupController.signup_post);

router.get('/login', loginController.login_get);
router.post('/login', loginController.login_post);
router.get('/logout', loginController.logout_get);

router.get('/create-message', messageController.create_message_get);
router.post('/create-message', messageController.create_message_post);

router.get('/member', privilegeController.member_get);
router.post('/member', privilegeController.member_post);

router.get('/admin', privilegeController.admin_get);
router.post('/admin', privilegeController.admin_post);

module.exports = router;