'use strict';

const mysqlModels = require('../../mysqlModels');
const { data } = require('../../utilities/logger');

exports.createNetwork = async(data)=>{
  return await mysqlModels.Network.create(data,{ ignoreDuplicates: true });
};

exports.getNetwork = () => {
  console.log('get')
  return mysqlModels.Network.findAll({
    include:[{
     model:mysqlModels.asset,
    }]
  });
}

exports.findNetwork = async(name)=>{
  console.log("findNetwork")
  return await mysqlModels.Network.findOne({where:{Name:name}},{ ignoreDuplicates: true })
}

exports.updateNetwork = (data,id)=>{
  console.log('update')
  return mysqlModels.Network.update(data,{where:{id:id}});
}

exports.deleteNetwork = (id)=>{
  console.log('delete')
  return mysqlModels.Network.delete(id)
};

exports.findAll=()=>{
  return mysqlModels.Network.findAll()
}


