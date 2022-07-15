let mongoose = require('mongoose');

let surveyModel = mongoose.Schema(
    {
        surveyID: String,
        title: String,
        fullname: String,
        startDate: Date,
        endDate: String,
        active: Boolean,
        question: String,
        questionType: Boolean,
        questionsAnswer: String
    },
    {
        collection: "survey"
    });


module.exports = mongoose.model('Survey', surveyModel);