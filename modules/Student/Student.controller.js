'use strict';

const messageUtil = require('../../utilities/message');
const responseUtil = require('../../utilities/response');
const StudentService = require('./Student.service');



exports.createStudents = async(req,res,next)=>{
  try{
    console.log('createStudents')
    const file = '/uploads/' + req.file.filename
    console.log(file)
    const mysqlUserData = await StudentService.createStudentsFromMysql(req.body,file);
    console.log(mysqlUserData)

    responseUtil.successResponse(res,messageUtil.usersFetched,{
      
      mysqlUserData
    })
  }catch(err){
    console.log(Error)
  }
}

exports.getStudents = async (req, res, next) => {
  try {
    const mysqlUserData = await StudentService.getStudentsFromMysql();
    //const mongoUserData = await StudentService.getStudentsFromMongo();
    console.log(mysqlUserData)

    responseUtil.successResponse(res, messageUtil.usersFetched,{
      mysqlUserData,
     // mongoUserData
   });
  } catch (ex) {
    responseUtil.serverErrorResponse(res, ex);
  }
}

exports.update= async (req, res,next) => {
  try {
     const mysqlUserData = await StudentService.update(req.params.id, req.body);
     console.log(mysqlUserData)
      responseUtil.successResponse(res, messageUtil.usersFetched,{
        mysqlUserData,
       // mongoUserData
     });
    } catch (ex) {
      responseUtil.serverErrorResponse(res, ex);
    }
  }


exports.del= async (req, res, next) => {
  try {
      const mysqlUserData = await StudentService.delete(req.params.id);
      mysqlUserData.destroy().then(function () {
        res.status(200).json({
          message: 'User deleted.',
        })
      })
      //responseUtil.successResponse(res, messageUtil.usersFetched,{
        //mysqlUserData,
       // mongoUserData
    // });
    } catch (ex) {
      responseUtil.serverErrorResponse(res, ex);
    }
  }

