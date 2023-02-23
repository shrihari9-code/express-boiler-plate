'use strict';

const messageUtil = require('../../utilities/message');
const responseUtil = require('../../utilities/response');
const StudentService = require('./Student.service');
//const { copyFile, deleteFile } = require('../../utilities/s3bucket');



exports.createStudents = async(req,res,next)=>{
  try{
    console.log('createStudents')
    const imageUrl=(req.files && req.files.profileImage!==undefined) ? req.files.profileImage[0].transforms[0].location:null;
    console.log(imageUrl)
    const mysqlUserData = await StudentService.createStudentsFromMysql(req.body,imageUrl);
    console.log(mysqlUserData)

    responseUtil.successResponse(res,messageUtil.usersFetched,{ mysqlUserData })
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

