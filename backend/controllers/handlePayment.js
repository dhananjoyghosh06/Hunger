import orderModel from '../models/userorder.js';
import Stripe from 'stripe';
import { getUser } from '../services/auth.js';
import "dotenv/config";
const stripe = Stripe(process.env.SECRET_KEY);

export const handlePayment =  async(req,res)=>{ 
    const {items,orderId,totalAmount,totalQuantity,userToken, address} = req.body;
    console.log(orderId, items, totalAmount,totalQuantity,userToken);
    const payload = getUser(userToken);
    console.log(address);
    
    const line_items = items.map(product => ({
        price_data: {
            currency:'inr',
            product_data: {
                name:product.name,
            },
            unit_amount:product.price *100,
        },
        quantity: product.quantity || 1,  // Adjust the quantity as needed
    }));
    
    const deliveryCharge = 40;
    line_items.push({
        price_data: {
            currency: 'inr',
            product_data: {
                name: 'Delivery Charge',
            },
            unit_amount: deliveryCharge*100,
        },
        quantity: 1,
    });

    const successful_url="http://localhost:5173/paymentsuccess";
   const  failed_url="http://localhost:5173/user/paymentfailed";
    try{
        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:successful_url,
            cancel_url:failed_url
        })
            console.log("data",session.url);
            res.send({url:'http://localhost:5173/paymentsuccess'})
        
        
    }
    catch{
        (e)=>console.log(e);
    }

    
    
 
}