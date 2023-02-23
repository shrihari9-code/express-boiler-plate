'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer')
const readXlsxFile = require("read-excel-file");
//const course= require('../modules/course')

const {createNetwork,deleteNetwork,getNetwork,updateNetwork,uploads,download} = require('../modules/Networks/Networks.controller');
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

const excelFilter = (req, file, cb) => {
    if (
      file.mimetype.includes("excel") ||
      file.mimetype.includes("spreadsheetml")
    ) {
      cb(null, true);
    } else {
      cb("Please upload only excel file.", false);
    }
  };
  
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null,"./uploads/");
      },
      filename: function (req, file, cb) {
        cb(
            null,
            new Date().valueOf() + 
            '_' +
            file.originalname
        );
    }
})

router.post('/', createNetwork);
router.post('/excel',upload.single('file'),uploads)
router.get('/download',download)
router.get('/',getNetwork)
router.put('/:id',updateNetwork)
router.delete('/:id',deleteNetwork)


//router.use('/api',course)

module.exports = router;