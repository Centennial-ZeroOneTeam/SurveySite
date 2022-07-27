/*
Created by Sabeen
*/
var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index')
let accountController = require('../controllers/account')

router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);

router.get('/login', accountController.displayLoginPage);
router.post('/login', accountController.processLoginPage);

router.get('/register', accountController.displayRegisterPage);
router.post('/register', accountController.processRegisterPage);

module.exports = router;
