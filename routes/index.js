'use strict';

const express = require('express');
const router = express.Router();



const data = require('../modules/data');
//const user = require('./user');
const student = require('./student')
const course = require('./course')
const marks = require('./marks')
const admin = require('./admin')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/get_data', data.getData);
router.post('/', data.getData);
router.use('/student',student)
router.use('/course',course)
router.use('/marks',marks)
router.use('/admin',admin)

//router.use('/user', user);

module.exports = router;
