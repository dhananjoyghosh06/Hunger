import twilio from 'twilio'
import User from '../models/user.js';
import { setUser } from '../services/auth.js';
import {sendOtpToTwilio} from '../middlewares/twilio.js';
import 'dotenv/config';
// Suman
// import {otpGenerate} from "./sendOtp.js";
let otpTimestamp=0;

const generateOtp = () => {
  otpTimestamp=Date.now();
  return Math.floor(1000 + Math.random() * 9000);
}
//let otp =generateOtp();  // 1456
let otp = 0;

export const  handleLoginotpVerification = async(req, res) =>{
  try {
    const { OTP , mobileNo} = req.body;
    
    const otpNumber = parseInt(OTP);
    const Mobile = parseInt(mobileNo);
    const user = await User.findOne({mobileNo});
    // console user otp
    console.log("asai base chasa" , otpNumber); //1456

    // console genarated otp
    console.log("user otp ", otp); // 1234 //8792 // 1456
    
    if(otp===otpNumber && Date.now()-otpTimestamp <=30000){
        console.log(Mobile);
        const token = setUser(user);
        
        //otp = generateOtp(); //3545
        res.cookie('loginToken', token);
      return res.status(200).json(token);
    }
    return res.status(400).json({ msg: "Invalid OTP" });
      
  } catch (e) {
    return res.status(401).json({ msg: "Internal Server error" });
  }
}


export const SendLoginOtptoUser = (req,res)=>{
    const {mobileNo} = req.body;
    otp = generateOtp(); // 1456
    console.log("random generated otp" , otp);  //6675

    sendOtpToTwilio(mobileNo, otp)
    .then((msg)=>{
      return res.status(200).json({msg:`OTP message has been sent : ${msg.sid}`})
    } )
    .catch((e)=>{
      res.status(400).json({msg:"Otp has not been sent"});
    });
}


