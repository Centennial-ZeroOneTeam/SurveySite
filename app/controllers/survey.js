/*
Created by Sabeen
Updated by Stanley
Last update date: Jul 27
*/
let express = require('express');
let mongoose = require('mongoose');

module.exports.displaySurveyListPage = (req, res, next) => {
    let surveyList = [1,2,3,4];

    res.render('survey/surveyList',{
        title: 'Public Survey',
        surveyList: surveyList
    });
}

module.exports.displaySurveyFormPage = (req, res, next) => {
    let surveyInfo = {
        "title": "Survey Title"
    };

    res.render('survey/surveyForm',{
        title: surveyInfo['title'],
        surveyInfo: surveyInfo
    });
}

module.exports.processSubmitSurvey = (req, res, next) => {
    res.redirect('/survey');
}