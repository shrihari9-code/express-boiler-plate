'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer');

const {getStudents,createStudents,del,update} = require('../modules/Student/Student.controller');
const upload = multer({
    storage: multer.diskStorage(
        {
            destination: function (req, file, cb) {
                cb(null, './uploads/');
            },
            filename: function (req, file, cb) {
                cb(
                    null,
                    new Date().valueOf() + 
                    '_' +
                    file.originalname
                );
            }
        }
    ), 
});
    router.post('/',upload.single('file'),createStudents)
    console.log('getStudents')
   // router.post("/upload",getStudents);
    router.post('/',createStudents)
    router.get('/',getStudents)
    router.put('/:id',update)
    router.delete('/:id',del)

module.exports = router;