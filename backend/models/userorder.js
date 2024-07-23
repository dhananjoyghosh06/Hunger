import mongoose from 'mongoose';

const userOrderSchema = new mongoose.Schema(
    {
        customer_id:{
            type:String,
            required:true,
        },
        customerDetails:{
            type:[Object],
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
        paymentStatus:{
            type:String,
            default:"Processing",
        },
        date:{
            type:Date,
            default:Date.now(),
        },
        

        
    }
)

const orderModel = mongoose.model('userOrder',userOrderSchema);

export default orderModel;  