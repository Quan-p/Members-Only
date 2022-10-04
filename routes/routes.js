const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signupController');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Homepage' });
});

router.get('/sign-up', signupController.signup_get);
router.post('/sign-up', signupController.signup_post);

module.exports = router;