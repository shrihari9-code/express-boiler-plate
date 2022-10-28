'use strict';

//const { Model } = require("mongoose");
//const course = require("./course");

//const Student = requrie('../mysqlModel').course

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('student', {
    id: {
      type: DataTypes.INTEGER,
      autoincrement:true,
      primaryKey:true,
    },
    Name: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    },
    CourseId: {
      type: DataTypes.INTEGER,
      Foriegnkey:true
    },
    image:{
      type:DataTypes.STRING
    },
  });

   Model.associate = function(mysqlModel){
      this.belongsTo(mysqlModel.course,{foriegnkey:'CourseId'})

    }
    Model.associate = function(mysqlModel){
      this.hasMany(mysqlModel.marks,{foriegnkey:'courseId'})
    }

  
  return Model
  ;
};
