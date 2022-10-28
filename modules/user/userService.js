'use strict';

const mysqlModels = require('../../mysqlModels');
const User = require('../../mongoModels/user');

exports.getUsersFromMysql = () => {
  return mysqlModels.user.findAll();
};

//exports.getUsersFromMongo = () => {
  //return User.find();
//};
