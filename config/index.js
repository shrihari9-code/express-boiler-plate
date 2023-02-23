'use strict';
const Dotenv = require('dotenv');
const dbConstants = require('./dbConstants.json');

module.exports = {
  DB_CONSTANTS: dbConstants,
  HTTP_STATUS_CODES: {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503
  },
  S3: {
    ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
    SIGNATURE_VERSION: process.env.S3_SIGNATURE_VERSION || 'v4',
    REGION: process.env.S3_REGION,
    BUCKET: process.env.S3_BUCKET,
    EXPIRY: process.env.S3_EXPIRY || 86400,
    URL: process.env.S3_URL,
},
};
