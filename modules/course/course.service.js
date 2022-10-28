'use strict';

const mysqlModels = require('../../mysqlModels');
//const Student = require('../../mysqlModels/Student');
//const Student = require('../../mongoModels/Student');
//const Course = require('../../mysqlModels/Student')

exports.createCourseFromMysql = (data)=>{
  console.log('createCourseFromMysql')
  return mysqlModels.course.create(data);
};
exports.getCourseFromMysql = () => {
  console.log('getStudentsFromMysql')
  return mysqlModels.course.findAll({
    include:[{
      model:mysqlModels.student,
      model:mysqlModels.marks
    }]
  });
};

exports.updateCourseFromMysql = (data,id)=>{
  console.log('updateStudentFromMysql')
  return mysqlModels.course.update(data,{where:{id:id}});
}

exports.deleteCourseFromMysql = (id)=>{
  console.log('deleteStudentFromMysql')
  return mysqlModels.course.delete(id)
};


