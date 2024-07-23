import orderModel from "../models/userorder.js"

export const handleMyOrders = async(req,res)=>{
        const id = req.body;
        const orders = await orderModel.find(
            {                
                "paymentStatus":'PAID'
            },
            {
                "customerDetails":{
                    "customer_id":id
                }
            }
        )

        console.log(orders);
        res.send("Ok");
}