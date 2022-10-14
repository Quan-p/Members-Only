const Message = require('../models/messageModel');
const { body, validationResult } = require('express-validator');

exports.create_message_get = (req, res, next) => {
    res.render('message_form', { title: 'Write a Message', user: res.locals.currentUser });
}

exports.create_message_post = [
    body('messageTitle').trim().isLength({ min: 1 }),
    body('textInput').trim().isLength({ min: 1 }),

    async(req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.render('message_form', { title: 'Write a Message', user: res.locals.currentUser, errors: errors.array() });
        }

        const message = new Message({
            user: req.user.id,
            title: req.body.messageTitle,
            text: req.body.textInput,
            timestamp: Date.now()
        })

        await message.save((err) => {
            if(err) return next(err);
            
            res.redirect('/');
        })
    }
];
