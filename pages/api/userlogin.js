// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../models/User"
import ConnectDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
const handler = async(req,res)=>{
    if(req.method=='POST'){

        let myUser = await User.findOne({"email": req.body.email})

   
        if(myUser){
            var bytes  = CryptoJS.AES.decrypt(myUser.password, 'thisis');
            var originalText = bytes.toString(CryptoJS.enc.Utf8);
          
            
            // Decrypt
          let oPassword = "dfjkf";
          
            if(req.body.email == myUser.email && req.body.password == originalText){
                var token = jwt.sign({name: myUser.name, email: myUser.email }, 'jwtsecret');
                res.status(200).json({Success: true, token});
            }else{
                res.status(200).json({error:"Invalid credentials"});
            }
        }else{
            res.status(200).json({error:"Invalid credentials"})
        }
    }
}
export default ConnectDb(handler);