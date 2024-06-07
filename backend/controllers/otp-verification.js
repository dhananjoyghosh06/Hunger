import User from "../models/user.js";
import twilio from 'twilio'
import {setUser} from '../services/auth.js'
import 'dotenv/config'
// Suman
// import {otpGenerate} from "./sendOtp.js";
let otpTimestamp=0;

const generateOtp = () => {
  otpTimestamp=Date.now();
  return Math.floor(1000 + Math.random() * 9000);
}
//let otp =generateOtp();  // 1456
let otp = 0;

export const  handleotpVerification = async(req, res) =>{
  try {
    const { OTP, email, name, mobileNo } = req.body;

    const otpNumber = parseInt(OTP);
    
    // console user otp
    console.log("asai base chasa" , otpNumber); //1456

    // console genarated otp
    console.log("user otp ", otp); // 1234 //8792 // 1456
    
    if(otp===otpNumber && Date.now()-otpTimestamp <=30000){
        const USER = await User.create({
            name,
            email,
            mobileNo,
        });
        const token = setUser(USER);

        //otp = generateOtp(); //3545
        res.cookie('signupToken', token);
      return res.status(200).json(token);
    }
    return res.status(400).json({ msg: "Invalid OTP" });
      
  } catch (e) {
    return res.status(401).json({ msg: "Internal Server error" });
  }
}


export const SendOtptoUser = (req,res)=>{
    const {mobileNo} = req.body;
    
    const recipientNumber = "9749700161";
    const client =twilio(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN);
    otp = generateOtp(); // 1456
    console.log("random generated otp" , otp);  //6675

    const sendOTP = (recipientNumber,otp )=>{
        client.messages.create({
            body:` Your Hunger verificaion code is ${otp} . Do not share to anyone .`,
            from:"+16237481048",
            to:recipientNumber
        })
        .then((msg)=>{
            return res.status(200).json({msg:`OTP message has been sent : ${msg.sid}`})
        } )
        .catch((e)=>{
            res.status(400).json({msg:"Otp has not been sent"});
        });

    }

    sendOTP(mobileNo,otp);
}



