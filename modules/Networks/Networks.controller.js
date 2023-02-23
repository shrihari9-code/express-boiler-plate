'use strict';

const messageUtil = require('../../utilities/message');
const responseUtil = require('../../utilities/response');
const AssetService = require('../Assests/Assets.service')
const NetworksService = require('./Networks.service');
const readXlsxFile = require("read-excel-file/node");
const db = require('../../mysqlModels');
const { createECDH } = require('crypto');
const { push } = require('../../utilities/logger');
const asset= require("../../mysqlModels/assets");
const excelJS = require("exceljs");
const { access } = require('fs');
const Models = db.assets
const networksss = db.Networksss 



exports.createNetwork = async(req,res,next)=>{
  try{
    console.log('create Asset')
    const mysqlUserData = await NetworksService.createNetwork(req.body);
    console.log(mysqlUserData)

    responseUtil.successResponse(res,messageUtil.usersFetched,{
      mysqlUserData
    })
  }catch(err){
    console.log(Error)
  }
}

exports.getNetwork = async (req, res, next) => {
  try {
    console.log('get course')
    const mysqlUserData = await NetworksService.getNetwork();
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

exports.updateNetwork = async(req,res,next)=>{
  try{
    console.log('update course')
    const mysqlUserData = await NetworksService.updateNetwork(req.params.id,req.body);
    console.log(mysqlUserData)

    responseUtil.successResponse(res,messageUtil.usersFetched,{
      mysqlUserData
    })
  }catch(err){
    console.log(err)
  }
}

  exports.deleteNetwork =  async(req,res,next)=>{
    try{
      console.log('delete course')
      const mysqlUserData = await NetworksService.deleteNetwork(req.params.id);
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


//   const changeValue = async(Name, type)=>{
//     const data = {
//       Name, type
//     }
//          const newNetwork = await NetworksService.createNetwork(data)
//     }
//       excels.forEach(async(item)=>{
//        await changeValue(item.network,"wallet");
//     });




//       //  excels.forEach(async(assets)=>{
//       //   let Name=assets.network 
//       //   let type = "wallet"
//       //   let NetworkData={Name,type}
//       //   let newNetwork =  await NetworksService.createNetwork(NetworkData)
//       //   console.log(newNetwork.id)
//       //   let data={
//       //     Name:assets.asset_name,
//       //     networkId:newNetwork.id,
//       //     contractAddress:assets.contract_address
//       //   }
//       //   const newasset= await AssetService.createAssets(data)
      
//       // })
//        Models.bulkCreate(excels)
      
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


exports.uploads= async(req,res,next)=>{
  try{
    let path = './uploads/' + req.file.filename;
    let excels = [];
    
    readXlsxFile(path).then((rows) => {
      // skip header
      rows.shift();
      rows.forEach((row) => {
        let excel = {
          asset_name: row[0],
          network:row[1],
          contract_address:row[2]
      };
      console.log(excel)
       excels.push(excel);
       console.log("hello",excels)
      
      })
      async function dats(){
        for(var val of excels){
         console.log("hello")
          const data = {
           Name:val.network,
           type:"wallet"
          }
          const newNetwork = await NetworksService.createNetwork(data)
          console.log("network created")
        }
       }
       dats()

       async function datas(){
        for(var val of excels){
         console.log("hello")
          const data = {
           Name:val.network,
           type:"wallet"
          }
          const network = await NetworksService.findNetwork(val.network)
          console.log("enwodoawodbaod",network.id)
          let datas= {
           Name:val.asset_name, networkId:network.id, contractAddress:val.contract_address
          }
          console.log(datas)
         const assets = await AssetService.createAssets(datas)
          console.log("asset created",assets)
        }
       }
       datas()
       
   
     res.status(200).json({
      message:"uploaded the file: " + req.file.originalname,
     })
    })  
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
}




exports.download =async (req, res) => {
let tutorials =[]

const assets = await AssetService.getAssets()

  assets.forEach((obj) => {
      tutorials.push({
        asset_name:obj.Name,
        Network:obj.Network.Name,
        contract_address:obj.contractAddress
      });
    });
  console.log("assets",tutorials)
   
    let workbook = new excelJS.Workbook();
    let worksheet = workbook.addWorksheet("Tutorials");

    worksheet.columns = [
      { header: "asset_name", key: "asset_name", width: 25 },
      {header:"network",key:"Network",width:25},
      { header: "contract_address", key: "contract_address", width: 25 },
    ];

    // Add Array Rows
    worksheet.addRows(tutorials);

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "tutorials.xlsx"
    );

    return workbook.xlsx.write(res).then(function () {
      res.status(200).end();
    });
};