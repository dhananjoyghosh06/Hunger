import mongoose from 'mongoose';

const userAddressSchema = new mongoose.Schema(
    {
        uniqueId:{
            type: String,
            required:true,
        },
        addressLine1 : {
            type:String,
            required:true,
        },
        addressLine2 : {
            type:String,
        },
        City:{
            type:String,
            required:true,
        },
        Dist:{
            type:String,
            required:true,
        },
        State:{
            type:String,
            required:true,
        },
        Country:{
            type:String,
            required:true,
        },
        Pin:{
            type:String,
            required:true,
        }
    }
);

const userAddress = mongoose.model('userAddress', userAddressSchema);
export default userAddress;