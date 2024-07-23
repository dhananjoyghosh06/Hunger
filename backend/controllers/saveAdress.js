import userAddress from "../models/userAddress.js";
import { getUser } from "../services/auth.js";
export const saveAddress = async( req, res) => {
    try{
        const {userToken,addressline1, addressline2,city,district,state,country,pincode} = req.body;
        const payload = getUser(userToken);
        const uniqueId = payload.id;
        console.log(uniqueId);
        const userExistance= await userAddress.findOne({uniqueId});
        
        if(userExistance) {
            const updatedUserAddress = await userAddress.findOneAndUpdate(
                {uniqueId:uniqueId},
                {
                    addressLine1 :addressline1,
                    addressLine2 :addressline2,
                    City:city,
                    Dist:district,
                    State:state,
                    Country:country,
                    Pin:pincode,
                }
            )
            return res.status(201).json({msg:"Address Updated Successfully"});
        }

        const USERADDRESS = await userAddress.create({
            uniqueId: uniqueId,
            addressLine1 :addressline1,
            addressLine2 :addressline2,
            City:city,
            Dist:district,
            State:state,
            Country:country,
            Pin:pincode,
        });
        return res.status(200).json({msg:"Address Saved Successfully"});

    }
    catch{
        return res.status(401).json({msg:"Server Error"});
    }
}