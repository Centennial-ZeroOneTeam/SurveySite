let mongoose = require('mongoose');

let  mainModel = mongoose.Schema({
  surveyID: String,
  author: String,
  question: String,
  questionType: Boolean,
  
  
},
{
    collection: "main"
});



module.exports = mongoose.model('main',   mainModel);