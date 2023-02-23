'use strict';

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('Network', {
    Name: {
      type: DataTypes.STRING,
      unique:true
    },
    type:{
      type: DataTypes.STRING
    }
  });
  Model.associate=function(mysqlModel){
    this.hasOne(mysqlModel.asset,{foreignKey:'networkId'})
  }
  return Model
}

