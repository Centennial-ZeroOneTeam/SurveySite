/*
Created by Sabeen
Updated by Stanley
Last update date: Jul 27
*/
let express = require('express');
let mongoose = require('mongoose');
const SurveyInfo = require("../models/survey");

module.exports.displaySurveyListPage = (req, res, next) => {
    let surveyList =

        [
            {"title": "test Q1"},
            {"title": "test Q2"},
            {"title": "test Q3"},
            {"title": "test Q4"},
        ];


    // SurveyInfo.find((err, surveyList) => {
    //
    //     if (err) {
    //         return console.error(err);
    //     } else {
    //
    //         res.render('survey/listSurvey',
    //             {
    //                 title: 'Public Survey',
    //                 surveyList: surveyList
    //             });
    //     }
    // });

    res.render('survey/surveyList', {
        title: 'Public Survey',
        surveyList: surveyList
    });
}

module.exports.displaySurveyFormPage = (req, res, next) => {
    let surveyInfo = {
        "title": "Survey Title"
    };

    res.render('survey/surveyForm', {
        title: surveyInfo['title'],
        surveyInfo: surveyInfo
    });
}

module.exports.processSubmitSurvey = (req, res, next) => {
    res.redirect('/survey');
}