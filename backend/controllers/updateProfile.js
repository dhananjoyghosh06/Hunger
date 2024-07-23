import User from "../models/user.js";
import { getUser } from "../services/auth.js";


 export const updateUserProfile = async(req,res)=>{
    const userToken = req.body.userToken;
    const userName = req.body.name;
    const userEmail= req.body.email;
    const userAddress = req.body.address;

    const USER = getUser(userToken);
    const userId = USER.id;

    const existedUser = await User.findOne({email:userEmail})
      console.log(existedUser);

   try{
      if(existedUser){
         return res.status(402).json({msg:"Email already used by another user"});
      }
      console.log("Ki somossa ki tor ? ")
      const updatedUser = await User.findByIdAndUpdate(
         {_id:userId},
         {
            name:userName,
            email:userEmail,
            address:userAddress,
         },
      );
      return res.status(201).json({msg:"User Updated Successfu"});
   }
   catch(e){
      console.log("Ab bol na mc");
      return res.status(401).json({msg:"Internal Serer error"});
   }


 }