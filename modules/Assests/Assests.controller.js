'use strict';

const messageUtil = require('../../utilities/message');
const responseUtil = require('../../utilities/response');
const AssetsService = require('./Assets.service');
const NetworksService = require('../Networks/Networks.service')
const readXlsxFile = require("read-excel-file/node");
const db = require('../../mysqlModels');
const assets = require('../../mysqlModels/assets');
const Models = db.asset




exports.createAssets = async(req,res,next)=>{
  try{
    console.log('create Asset')
    const mysqlUserData = await AssetsService.createAssets(req.body);
    console.log(mysqlUserData)

    responseUtil.successResponse(res,messageUtil.usersFetched,{
      mysqlUserData
    })
  }catch(err){
    console.log(Error)
  }
}

exports.getAssets = async (req, res, next) => {
  try {
    console.log('get course')
    const mysqlUserData = await AssetsService.getAssets();
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

exports.updateAssets = async(req,res,next)=>{
  try{
    console.log('update course')
    const mysqlUserData = await AssetsService.updateAssets(req.params.id,req.body);
    console.log(mysqlUserData)

    responseUtil.successResponse(res,messageUtil.usersFetched,{
      mysqlUserData
    })
  }catch(err){
    console.log(err)
  }
}

  exports.deleteAssets =  async(req,res,next)=>{
    try{
      console.log('delete course')
      const mysqlUserData = await AssetsService.deleteAssets(req.params.id);
      console.log(mysqlUserData)
      responseUtil.successResponse(res,messageUtil.usersFetched,{
        mysqlUserData
      })
    }catch(err){
      console.log(err)
    }
}
// exports.uploads= async(req,res,next)=>{
//   try{
//     let path = './uploads/' + req.file.filename;
//     let excels = [];
    
//     readXlsxFile(path).then((rows) => {
//       // skip header
//       rows.shift();
//       rows.forEach((row) => {
//         let excel = {
//           asset_name: row[0],
//           network:row[1],
//           contract_address:row[2]
//       };
//        excels.push(excel);
//       })

     
//       excels.map(async(assets)=>{
//         const network = await NetworksService.findNetwork(assets.network)
//         let networkId = network.id
//         let Name = assets.asset_name
//         let contractAddress = assets.contract_address
//         const data = {Name,networkId,contractAddress}
//         const asset = await AssetsService.createAssets(data)
//         console.log("adabda",asset)
//       })

//       Models.bulkCreate(excels)
      
//     .then(() => {
//       res.status(200).send({  
//         message: "Uploaded the file successfully: " + req.file.originalname,
//       });
//     }).
//     catch((error) => {
//       res.status(500).send({
//         message: "Fail to import data into database!",
//         error: error.message,
//       });
//     });
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       message: "Could not upload the file: " + req.file.originalname,
//     });
//   }
// }



// exports.uploads= async(req,res,next)=>{
//     try{
//       let path = './uploads/' + req.file.filename;
//       let excels = [];
      
//       readXlsxFile(path).then((rows) => {
//         // skip header
//         rows.shift();
//         rows.forEach((row) => {
//           let excel = {
//             asset_name: row[0],
//             network:row[1],
//             contract_address:row[2]
//         };
//          excels.push(excel);
//         })
  
       
//         excels.forEach(async(assets)=>{
//           const network = await NetworksService.findNetwork(assets.network)
//           let networkId = network.id
//           let Name = assets.asset_name
//           let contractAddress = assets.contract_address
//           const data = {Name,networkId,contractAddress}
//           const asset = await AssetsService.createAssets(data)
//           console.log("adabda",asset)
//         })
  
//         Models.bulkCreate(excels)
        
//       .then(() => {
//         res.status(200).send({  
//           message: "Uploaded the file successfully: " + req.file.originalname,
//         });
//       }).
//       catch((error) => {
//         res.status(500).send({
//           message: "Fail to import data into database!",
//           error: error.message,
//         });
//       });
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({
//         message: "Could not upload the file: " + req.file.originalname,
//       });
//     }
//   }

// exports.uploads= async(req,res,next)=>{
//   try{
//     let path = './uploads/' + req.file.filename;
//     let excels = [];
    
//     readXlsxFile(path).then((rows) => {
//       // skip header
//       rows.shift();
//       rows.forEach((row) => {
//         let excel = {
//           asset_name: row[0],
//           network:row[1],
//           contract_address:row[2]
//       };
//       console.log(excel)
//        excels.push(excel);
//        console.log("hello",excels)
      
//       })
//       async function dats(){
//         for(var val of excels){
//          console.log("hello")
//           const data = {
//            Name:val.network,
//            type:"wallet"
//           }
//           const network = await NetworksService.findNetwork(val.network)
//          // const newNetwork = await NetworksService.createNetwork(data)
//           console.log("network created")
//           const datas= {
//            Name:val.asset_name, networkId:network.id, contractAddress:val.contract_address
//           }
//           const assets = await AssetsService.createAssets(datas)
//           console.log("asset created")
//         }
//        }
//        dats()
   
//      res.status(200).json({
//       message:"uploaded the file: " + req.file.originalname,
//      })
//     })
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       message: "Could not upload the file: " + req.file.originalname,
//     });
//   }
// }