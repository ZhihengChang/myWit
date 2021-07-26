const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: [true, 'A comment must have a user id'],
    },

    username: {
        type: String,
        required: [true, 'A comment must have a username'],
    },

    post_id: {
        type: String,
        required: [true, 'A comment must have a post id'],
    },

    message: {
        type: String,
        required: [true, 'A comment must have a message'],
        trim: true,
    },

    comment_ts: { 
        type: Number, 
        default: new Date().getTime()
    },

});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;