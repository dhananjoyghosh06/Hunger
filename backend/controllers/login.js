import User from "../models/user.js";


async function handleUserLogin (req,res){
    const mobileNo = req.body.mobileNo;
    
    try{
        const user = await User.findOne({mobileNo})
        console.log(user);
        if(!user){
            return res.status(400).json({msg:"Mobile No is not Registered"});
        }
        return res.status(200).json({msg:"User found"});
    }
    catch{
        return res.status(401).json({msg:"Internal Server error"});
    }
}



export default handleUserLogin;


