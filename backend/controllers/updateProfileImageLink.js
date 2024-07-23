import { getUser } from "../services/auth.js";
import User from "../models/user.js";

export const updateProfileImageLink = async(req,res)=>{
    const imageUrl = req.body.cloudLink;
    const userToken = req.body.userToken;

    const payLoad = getUser(userToken);
    const uId = payLoad.id;
    console.log(uId);

    try{
        
        console.log("Ki somossa ki tor ? ")
        const updatedUser = await User.findByIdAndUpdate(
           {_id:uId},
           {
              profImgLink:imageUrl
           }
        );
        return res.status(200).json({msg:"Profile Image updated successfully"});
     }
    catch{
        return res.status(400).json({msg:"Internal Server error"});
    }
   
}