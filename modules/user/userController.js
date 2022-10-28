'use strict';

const messageUtil = require('../../utilities/message');
const responseUtil = require('../../utilities/response');

const userService = require('./userService');

exports.getUsers = async (req, res, next) => {
  try {
    const mysqlUserData = await userService.getUsersFromMysql();
    //const mongoUserData = await userService.getUsersFromMongo();

    responseUtil.successResponse(res, messageUtil.usersFetched, {
      mysqlUserData,
     // mongoUserData
    });
  } catch (ex) {
    responseUtil.serverErrorResponse(res, ex);
  }
};

