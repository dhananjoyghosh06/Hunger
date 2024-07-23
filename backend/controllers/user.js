import User from "../models/user.js";
// import axios from 'axios'

async function handleUserSignUp (req, res){
    const {name,email,mobileNo} = req.body;
   
    try{
        const isValidMobileNo = /^\d{10}$/.test(mobileNo);
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const emailExistance = await User.findOne({email});
        const mobileExistance = await User.findOne({mobileNo})

        if(!isValidEmail && !isValidMobileNo) return res.status(405).json({msg:"Email and Mobile both are not valid !"})
        if(!isValidMobileNo) return res.status(402).json({msg:"Mobile No is Not Valid !"})
        if(!isValidEmail) return res.status(403).json({msg:"Email is not Valid !"})
        if(emailExistance) return res.status(400).json({message:"Email Already Exists !"})
        if(mobileExistance) return res.status(400).json({message:"Mobile No Already Exists !"})

        return res.status(200).json({msg:"Success"});
    }  
    catch(e){
       return res.status(401).json({msg:"Internal Server Error !"}); 
    }  
}



export default handleUserSignUp;


