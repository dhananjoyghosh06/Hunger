import userAddress from "../models/userAddress.js";
import { getUser } from '../services/auth.js';

export const handleGetAddressPayload = async(req, res)=>{
    const {userToken} = req.body;
    
    const payload = getUser(userToken);
    const uniqueId = payload.mobileNo;
    const Address = await userAddress.findOne({uniqueId});
    
    return res.status(200).json({Address});
}