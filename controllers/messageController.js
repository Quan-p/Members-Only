const Message = require('../models/messageModel');

exports.create_message_get = (req, res, next) => {
    res.render('message_form', { title: 'Create a Message' });
}

exports.create_message_post = (req, res, next) => {
    res.send("NOT IMPLEMENTED: Create Message POST");
}