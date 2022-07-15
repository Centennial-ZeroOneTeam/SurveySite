let express = require('express');
let mongoose = require('mongoose');

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}