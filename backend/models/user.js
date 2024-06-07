import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
        },
        email:{
            type:String,
            require:true,
            unique:true,
        },
        mobileNo:{
            type:String,
            require:true,
            unique:true,
        },
        address:{
            type:String,
            default:"",
        },
        profImgLink:{
            type:String,
        },
    }
);

const User = mongoose.model('user', userSchema);

export default User;
    