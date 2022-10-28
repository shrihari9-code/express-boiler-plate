const jwt = require("jsonwebtoken");
const SECRET_KEY = "Shrihari";

const auth = (req,res,next)=>{
    try{
        let token = req.headers.authorization;
        console.log(token)
        if(token){
            let user = jwt.verify(token,SECRET_KEY);
            req.userId = user.id;
        }
     else{
         return res.status(401).json({message:"Unauthorized User"});
     } 
     next();
    }catch(error){
        console.log(error);
        res.status(401).json({message:"Unauthorized User"});
    }
}
module.exports=auth;