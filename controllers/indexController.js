const Message = require('../models/messageModel');

exports.index = async(req, res, next) => {
    try {
        const messages = await Message.find().sort([['timestamp', 'descending']]).populate('user');
        return res.render('index', { title: 'Homepage', user: res.locals.currentUser, messages: messages })
    }
    catch (err) {
        return next(err);
    }
}

exports.delete_message_post = (req, res, next) => {
  // Remove the message using the id from the database
    Message.findByIdAndRemove(req.body.messageId, function (err) {
        if (err) return next(err);
        res.redirect("/");
    });
};