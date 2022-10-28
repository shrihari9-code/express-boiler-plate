'use strict';

const messageUtil = require('../../utilities/message');
const responseUtil = require('../../utilities/response');
const CourseService = require('./course.service');



exports.createCourse = async(req,res,next)=>{
  try{
    console.log('create Course')
    const mysqlUserData = await CourseService.createCourseFromMysql(req.body);
    console.log(mysqlUserData)

    responseUtil.successResponse(res,messageUtil.usersFetched,{
      mysqlUserData
    })
  }catch(err){
    console.log(Error)
  }
}

exports.getCourse = async (req, res, next) => {
  try {
    console.log('get course')
    const mysqlUserData = await CourseService.getCourseFromMysql();
    //const mongoUserData = await CourseService.getStudentsFromMongo();
    console.log(mysqlUserData)

    responseUtil.successResponse(res, messageUtil.usersFetched,{
      mysqlUserData,
     // mongoUserData
   });
  } catch (ex) {
    responseUtil.serverErrorResponse(res, ex);
  }
}

exports.updateCourse = async(req,res,next)=>{
  try{
    console.log('update course')
    const mysqlUserData = await CourseService.updateCourseFromMysql(req.params.id,req.body);
    console.log(mysqlUserData)

    responseUtil.successResponse(res,messageUtil.usersFetched,{
      mysqlUserData
    })
  }catch(err){
    console.log(err)
  }
}

  exports.deleteCourse =  async(req,res,next)=>{
    try{
      console.log('delete course')
      const mysqlUserData = await CourseService.deleteCourseFromMysql(req.params.id);
      console.log(mysqlUserData)
      responseUtil.successResponse(res,messageUtil.usersFetched,{
        mysqlUserData
      })
    }catch(err){
      console.log(err)
    }
}
