let mongoose = require('mongoose');

let surveyModel = mongoose.Schema(
    {
        surveyID: String,
        title: String,
        question: String,
    },
    {
        collection: "survey"
    });


module.exports = mongoose.model('Survey', surveyModel);