import crypto from 'crypto';

export const generateOrderId = ()=>{
     const uniqueId = crypto.randomBytes(16).toString('hex');

     const hash = crypto.createHash('sha256');
     hash.update(uniqueId);

     const orderId = hash.digest('hex');

     return orderId;
}