'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express', content: 'This is dummy paragraph,a second argument.' });
});


router.get('/about', function (req, res) {
    res.render('about', { title: 'Express', content: 'This is dummy paragraph, for About!' });
});


module.exports = router;
