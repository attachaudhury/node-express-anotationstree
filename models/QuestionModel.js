const mongoose = require('mongoose');
const QuestionSchema = mongoose.Schema({
    question:{type:String,index:true},
    topics:[{type:mongoose.Schema.Types.ObjectId, ref:'Topic'}],
})
module.exports = mongoose.model('Question', QuestionSchema, 'Question');