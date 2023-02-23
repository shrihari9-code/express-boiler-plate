const AWS = require('aws-sdk');
const { S3 } = require('../config/index');

const s3 = new AWS.S3({
    accessKeyId: S3.ACCESS_KEY_ID,
    secretAccessKey: S3.SECRET_ACCESS_KEY,
    signatureVersion: S3.SIGNATURE_VERSION,
    region: S3.REGION
});

const getSignedUrl = async (path) => {
    try {
        return await s3.getSignedUrlPromise('getObject', {
            Bucket: S3.BUCKET,
            Key: path,
            Expires: parseInt(S3.EXPIRY, 10),
        });
    } catch (ex) {
        console.error(ex.toString());
        return false;
    }
};

const uploadFile = async (file, path) => {
    try {
        return await s3
            .upload({
                Bucket: S3.BUCKET,
                Body: file.data,
                Key: path,
                ContentType: file.mimetype,
            })
            .promise();
    } catch (ex) {
        console.error(ex.toString());
        return false;
    }
};

const deleteFile = async (path) => {
    try {
        return await s3
            .deleteObject({
                Bucket: S3.BUCKET,
                Key: path,
            })
            .promise();
    } catch (ex) {
        console.error(ex.toString());
        return false;
    }
};

const copyFile = async (source, destination) => {
    try {
        const a= await s3
            .copyObject({
                Bucket: S3.BUCKET,
                CopySource: source,
                Key: destination,
            })
            .promise();
            return a;
    } catch (ex) {
        console.error(ex.toString());
        return false;
    }
};

module.exports = {
    s3,
    getSignedUrl,
    uploadFile,
    deleteFile,
    copyFile,
};
