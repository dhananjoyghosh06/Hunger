import User from "../models/user.js";
import twilio from 'twilio'
import {setUser} from '../services/auth.js'
import 'dotenv/config'
import { sendOtpToTwilio } from "../middlewares/twilio.js";
// Suman
// import {otpGenerate} from "./sendOtp.js";
let otpTimestamp=0;

const generateOtp = () => {
  otpTimestamp=Date.now();
  return Math.floor(1000 + Math.random() * 9000);
}
//let otp =generateOtp();  // 1456
let otp =0;

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


export const SendOtptoUserForSignUp = (req,res)=>{
    const {mobileNo} = req.body;
    otp = generateOtp(); // 1456
    console.log("random generated otp" , otp);  //6675

    sendOtpToTwilio(mobileNo,otp);
}



