/*
Created by Sabeen
Updated by Stanley
Last update date: Jul 28
*/
let express = require('express');
let mongoose = require('mongoose');
const SurveyInfo = require("../models/survey");

function displayName(req) {
    return req.user ? req.user.displayName : ''
}

module.exports.displaySurveyListPage = (req, res, next) => {
    SurveyInfo.find((err, surveyList) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('survey/surveyList',
                {
                    title: 'Public Survey',
                    surveyList: surveyList,
                    displayName: displayName(req)
                });
        }
    });

}

module.exports.displaySurveyFormPage = (req, res, next) => {
    let surveyInfo = {
        "title": "Survey Title"
    };

    res.render('survey/surveyForm', {
        title: surveyInfo['title'],
        surveyInfo: surveyInfo,
        displayName: displayName(req)
    });
}

module.exports.processSubmitSurvey = (req, res, next) => {
    console.log(req.body);

    res.redirect('/survey');
}