import jwt from 'jsonwebtoken';
const secret = process.env.SECRET

const setUser = (user)=>{ 
    const payload ={
        id:user._id,
        email:user.email,
        name:user.name,
        mobileNo:user.mobileNo,
        profImgLink:user.profImgLink,
    }   
    return jwt.sign(payload, secret);
}

const getUser = (token) =>{
    if(!token) return null;
    try{
        return jwt.verify(token , secret)
    }
    catch{
        return null;
    }
    
}

export {setUser, getUser};