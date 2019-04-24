const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
firstName: { type: String, required: true},
lastName: { type: String, required: true},
bookname:{type:String,required:true},
comment:{type: String, required: true}
});

module.exports = mongoose.model('comment',commentSchema,'comment');