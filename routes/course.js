'use strict';

const express = require('express');
const router = express.Router();
//const course= require('../modules/course')

const {getCourse,createCourse,deleteCourse,updateCourse} = require('../modules/course/course.controller');

router.post('/', createCourse);
router.get('/',getCourse)
router.put('/:id',updateCourse)
router.delete('/:id',deleteCourse)


//router.use('/api',course)

module.exports = router;