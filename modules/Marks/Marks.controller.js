'use strict';

const messageUtil = require('../../utilities/message');
const responseUtil = require('../../utilities/response');
const MarksService = require('./Marks.service');



exports.create = async(req,res,next)=>{
  try{
    console.log('create')
    const mysqlUserData = await MarksService.create(req.body);
    console.log(mysqlUserData)

    responseUtil.successResponse(res,messageUtil.usersFetched,{
      mysqlUserData
    })
  }catch(err){
    console.log(Error)
  }
}

exports.get = async (req, res, next) => {
  try {
    console.log('get')
    const mysqlUserData = await MarksService.get();
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

exports.update = async(req,res,next)=>{
  try{
    console.log('update')
    const mysqlUserData = await MarksService.update(req.params.id,req.body);
    console.log(mysqlUserData)

    responseUtil.successResponse(res,messageUtil.usersFetched,{
      mysqlUserData
    })
  }catch(err){
    console.log(err)
  }
}

  exports.del =  async(req,res,next)=>{
    try{
      console.log('delete')
      const mysqlUserData = await MarksService.delete(req.params.id);
      console.log(mysqlUserData)
      responseUtil.successResponse(res,messageUtil.usersFetched,{
        mysqlUserData
      })
    }catch(err){
      console.log(err)
    }
}
