
import { getUser } from '../services/auth.js';

export const getPayload = (req, res)=>{
    const token = req.body.userToken;
  // console.log(token);
    const payload = getUser(token);

    return res.status(200).json({payload});
}
