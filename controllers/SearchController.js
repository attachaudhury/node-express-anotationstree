var TopicModel = require('../models/TopicModel');
var QuestionModel = require('../models/QuestionModel');
exports.search = async (req, res, next) => {
   var searchQuery = req.query.q;
    var topic = await TopicModel.findOne({name: searchQuery},{_id:1});
    if(topic){
       var topicIdString = topic._id.toString();
       var topicAndClildrens = await TopicModel.find({$or:[{path: {$regex: topicIdString}},{_id: topicIdString}]},{_id:1});
       var topicAndClildrensIds = topicAndClildrens.map(topic => topic._id.toString());
       var questionsContainingTopics = await QuestionModel.find({topics: {$in: topicAndClildrensIds}});
       var loadedQuestionIds= questionsContainingTopics.map(question => question.question.toString());
       res.status(200).json(loadedQuestionIds);
    }
    else{
       res.status(200).json([]);
    }    

}


