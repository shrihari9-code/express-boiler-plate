'use strict';

const mysqlModels = require('../../mysqlModels');

exports.create = (data)=>{
  console.log('create')
  return mysqlModels.marks.create(data);
};
exports.get = () => {
  console.log('get')
  return mysqlModels.marks.findAll({
    include:[{
        model:mysqlModels.course,
        model:mysqlModels.student
       }]
  });
};

exports.update = (data,id)=>{
  console.log('update')
  return mysqlModels.marks.update(data,{where:{id:id}});
}

exports.delete = (id)=>{
  console.log('delete')
  return mysqlModels.marks.delete(id)
};


