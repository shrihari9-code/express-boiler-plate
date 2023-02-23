'use strict';

const mysqlModels = require('../../mysqlModels');

exports.createAssets = async(data)=>{
  return await mysqlModels.asset.create(data,{ ignoreDuplicates: true });
};
exports.getAssets = () => {
  console.log('getAssets')
  return mysqlModels.asset.findAll({
    include:[{
      model:mysqlModels.Network,
     }]
  });
};

exports.updateAssets = (data,id)=>{
  console.log('update Assets')
  return mysqlModels.asset.update(data,{where:{id:id}});
}

exports.deleteAssets = (id)=>{
  console.log('delete')
  return mysqlModels.asset.delete(id)
};


