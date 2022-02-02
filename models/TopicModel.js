const mongoose = require('mongoose');
var materializedPlugin = require('mongoose-materialized');
const TopicSchema = mongoose.Schema({
    name:String,
})
TopicSchema.plugin(materializedPlugin);
module.exports = mongoose.model('Topic', TopicSchema, 'Topic');