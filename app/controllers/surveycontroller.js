let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let SurveyInfo = require('../models/survey');

module.exports.displaySurveyList = (req, res, next) => {
    SurveyInfo.find((err, surveyList) => {
        if (err) {
            return console.error(err);
        } else {

            res.render('survey/list',
                {
                    title: 'Survey Overview',
                    surveyList: surveyList
                });
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('survey/add', {title: 'Add Question'})
}

module.exports.processAddPage = (req, res, next) => {
    let newSurvey = SurveyInfo({
        "surveyID": req.body.id,
        "question": req.body.question,

    });

    SurveyInfo.create(newSurvey, (err, SurveyInfo) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/survey');
        }
    });

}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    SurveyInfo.remove({_id: id}, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/survey');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    SurveyInfo.findById(id, (err, surveyToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('survey/edit', {title: 'Edit Question', survey: surveyToEdit})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedSurvey = SurveyInfo({
        "_id": req.params.id,
        "question": req.body.question,
    });

    SurveyInfo.updateOne({_id: id}, updatedSurvey, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/survey');
        }
    });
}
