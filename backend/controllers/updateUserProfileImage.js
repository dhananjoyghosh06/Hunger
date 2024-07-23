import fs from 'fs';
import { cloudinary } from '../images/cloudinary/cloudinary.js';
import User from '../models/user.js';
import { getPayload } from './getPayload.js';

const updateProfileImage = async(req, res) => {
    
    await cloudinary.uploader.upload(req.file.path, function(err, result){
        if(err) {
            console.log(err);
            return res.status(403).json({msg:err});
        }
        fs.unlinkSync(req.file.path);
        res.status(200).json({imageUrl:result.secure_url});
    })
}

export { updateProfileImage };
