import orderModel from '../models/userorder.js';
import { getUser } from '../services/auth.js';
import "dotenv/config";
import { Cashfree } from "cashfree-pg"; 

    Cashfree.XClientId = process.env.CASHFREE_APP_ID;
    Cashfree.XClientSecret =process.env.CASHFREE_SECRET_KEY;
    Cashfree.XEnvironment = 'TEST';

export const handlePaymentbyCashfree = async(req,res)=> {
    
  
    const {totalAmount,userToken,items, address} = req.body;
    // console.log(items, totalAmount,totalQuantity,userToken);
    const payload = getUser(userToken);
    const user_details= {
        customer_name: payload.name,
        customer_email:payload.email,
        customer_id:payload.id,
        customer_phone:payload.mobileNo
    }
    
    const newOrder = await orderModel.create({
            customer_id:payload.id,
            customerDetails: user_details,
            items:items,
            amount:totalAmount,
            address:address,

    })
     const objectId = newOrder._id;
     const uniqueId = objectId.toString();
     console.log(uniqueId);
    var request = {
    "order_id": uniqueId,
    "order_amount": totalAmount,
    "order_currency": "INR",
    "customer_details": user_details,
    "order_meta": {
      "return_url": `http://localhost:5173/paymentsuccess?OrderId=${uniqueId}`,
    },
    "order_note": ""
  }

  await Cashfree.PGCreateOrder("2023-08-01", request).then((response) => {
    var a = response.data;
    return res.json(a);
  })
    .catch((error) => {
      console.error('Error setting up order request:', error.response.data);
    });
}