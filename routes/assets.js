'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer')
const readXlsxFile = require("read-excel-file");

//const course= require('../modules/course')

const {getAssets,createAssets,deleteAssets,updateAssets} = require('../modules/Assests/Assests.controller');
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



router.post('/', createAssets);
// router.post('/excel',upload.single('file'),uploads)
router.get('/',getAssets)
router.put('/:id',updateAssets)
router.delete('/:id',deleteAssets)


//router.use('/api',course)

module.exports = router;