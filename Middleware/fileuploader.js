const multer = require('multer');
// const multerS3 = require('multer-s3');
var multerS3 = require('multer-s3-transform')
const path = require('path');
const { badRequestError} = require('../utilities/response');
const sharp = require('sharp');
const { S3 } = require('../config');
const { s3 } = require('../utilities/s3bucket');
let maxFileSizeNew = 1024 * 1024 * 2; // 2 MB
const storage = multerS3({
    s3,
    bucket: S3.BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    shouldTransform: function (req, file, cb) {
        cb(null, /^image/i.test(file.mimetype))
      },
      transforms: [{
        id: 'original',
        key: function (req, file, cb) {
            cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
        },
        transform: function (req, file, cb) {
          //Perform desired transformations
          cb(null, sharp().resize(300, 300))
        }
      }]
});


module.exports = ({ allowedMimes, maxFileSize, fields }) => (req, res, next) => {
    const cpUpload = multer({
        storage,
        // eslint-disable-next-line no-shadow
        fileFilter: (req, file, cb) => {
            if (!allowedMimes.includes(file.mimetype) || !file.originalname.match(/\.(jpeg|jpg|png)$/)) {
                cb(new Error('Invalid file type!'));
            } else {
                cb(null, true);
            }
        },
        limits: { fileSize: maxFileSizeNew }, // fileSize in bytes
    }).fields(fields);

    cpUpload(req, res, (er) => {
        if (er) {
            console.log(er)
            //throw err
           // return badRequestError(res, err.message);
        } else {
            return next();
        }
    });
};
