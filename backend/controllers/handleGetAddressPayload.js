import userAddress from "../models/userAddress.js";
import { getUser } from '../services/auth.js';

export const handleGetAddressPayload = async(req, res)=>{
    const {userToken} = req.body;
    // console.log(userToken);
    const payload = getUser(userToken);
    // console.log(payload);
    const uniqueId = payload.id;
    const Address = await userAddress.findOne({uniqueId});
    // console.log(Address);
    return res.status(200).json({Address});
}