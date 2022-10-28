'use strict';

//const { Model } = require("mysql");

//const mysqlModel=require('../mysqlModels').Student;
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('course', {
    Name: {
      type: DataTypes.STRING
    },
    fee: {
      type: DataTypes.INTEGER
    }

  });
  Model.associate=function(mysqlModel){
    this.hasMany(mysqlModel.student,{foreignKey:'CourseId'})
  }
  Model.associate=function(mysqlModel){
    this.hasMany(mysqlModel.marks,{foreignKey:'CourseId'})
  }
  return Model;
};
