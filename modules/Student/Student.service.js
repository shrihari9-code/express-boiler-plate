'use strict';


const { model } = require('mongoose');
const mysqlModels = require('../../mysqlModels');
const { param } = require('../../routes');
//const course = require('../course')
//const student = require('../../mongoModels/Student');
//const = require('../../mysqlModels/course')

exports.createStudentsFromMysql = async(data,image)=>{
  console.log('createStudentsFromMysql')
  console.log(data)
  return mysqlModels.student.create({...data,image});
};
exports.getStudentsFromMysql = async() => {
  console.log('getStudentsFromMysql')
  return mysqlModels.student.findAll({
    include:[{
     model:mysqlModels.course,
     model:mysqlModels.marks
    }]
  });
};

exports.update = async(id,data)=>{
  console.log('update')
  return mysqlModels.student.update(data,{where:{id:id}});
}

exports.delete = async(id)=>{
  console.log('delete')
  return mysqlModels.student.findOne({id})
};



