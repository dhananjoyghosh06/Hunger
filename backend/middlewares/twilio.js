import { configDotenv } from 'dotenv';
import twilio from 'twilio';
import 'dotenv/config';

const twilio_sid= process.env.TWILIO_ACCOUNT_SID;
const twilio_token = process.env.TWILIO_AUTH_TOKEN;
const twilo_mobile = process.env.TWILIO_MOBILE_NO;

const client =twilio(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN);

export const sendOtpToTwilio = async(mobileNo, otp)=>{
    const countrycode = "+91";
    let msgOptions = {
        body:` Your Hunger verificaion code is ${otp} . Do not share to anyone .`,
        from: twilo_mobile,
        to: countrycode.concat(mobileNo)
    }

    try{
        client.messages.create(msgOptions);
    }
    catch{
        (e)=>console.log(e);
    }
}