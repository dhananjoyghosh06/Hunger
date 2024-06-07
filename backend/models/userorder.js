import mongoose from 'mongoose';

const userOrderSchema = new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true,
        },
        mobileNo:{
            type:String,
            required:true,
        },
        items:{
            type:[Object],
            required:true,
        },
        amount :{
            type:Number,
            required:true,
        },
        address:{
            type:Array,
            required:true,
        },
        status:{
            type:String,
            default:"Processing",
        },
        date:{
            type:Date,
            default:Date.now(),
        },
        payment:{
            type:Boolean,
            required:true,
            default:false,
        }

        
    }
)

const orderModel = mongoose.model('userOrderSchema',userOrderSchema);

export default orderModel;  