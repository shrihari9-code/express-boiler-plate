'use strict'


module.exports=(sequelize,DataTypes)=>{
  const Model = sequelize.define('asset',{
    Name:{
      type:DataTypes.STRING
    },
    networkId:{
      type:DataTypes.INTEGER,
      // unique:true,
      foreignKey:true
    },
    contractAddress:{
      type:DataTypes.STRING
    }
  })
  Model.associate=function(mysqlModel){
    this.belongsTo(mysqlModel.Network,{foreignKey:'id'})
  }
  return Model
}