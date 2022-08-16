// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from '../../models/User'
import ConnectDb from '../../middleware/mongoose'
var CryptoJS = require("crypto-js");
const  handler = async(req, res)=>{

    if(req.method == 'POST'){
        const {name,email} = req.body;
        let myU = new User({name,email,password:CryptoJS.AES.encrypt(req.body.password, 'thisis').toString()} );
        await myU.save()
        res.status(200).json({Success:"Working fine"})
      

    }else{
      res.status(200).json({ name: 'Bad request' })
    }
    
  }

  export default ConnectDb(handler);
  