import React, { useState } from "react";
import { useRef, useEffect } from "react";
import axios from 'axios';
import {  useNavigate } from "react-router-dom";


const OtpVerification = () => {
  
  const [firstDigit, setFirstdigit] = useState("");
  const [secondDigit, setSecondigit] = useState("");
  const [thirdDigit, setThirddigit] = useState("");
  const [fourthDigit, setFourthdigit] = useState("");
  // Suman
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const [buttonclicked, setButtonClicked] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const [messages, setMessages] = useState(" ");
  const otpInputs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  

  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedName = localStorage.getItem("name");
    const storedMobileNo = localStorage.getItem("mobileNo");

    if(storedEmail) {
      setEmail(storedEmail);
      localStorage.removeItem('email');
    }

    if(storedName) {
      setName(storedName);
      localStorage.removeItem('name');
    }

    if(storedMobileNo) {
      setMobileNo(storedMobileNo);
      localStorage.removeItem('mobileNo');
    }
  }, []);

  useEffect(()=>{
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setButtonClicked(true);
        setSeconds(prevSeconds => prevSeconds - 1);
      }else{
        setButtonClicked(false);
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
    
  }, [seconds])
  
  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleChange = (index, value) => {
    switch (index) {
      case 0:
        setFirstdigit(value);
        if (value !== '') otpInputs[1].current.focus();
        break;
      case 1:
        setSecondigit(value);
        if (value !== '') otpInputs[2].current.focus();
        break;
      case 2:
        setThirddigit(value);
        if (value !== '') otpInputs[3].current.focus();
        break;
      case 3:
        setFourthdigit(value);
        if(value !==""){
           const OTP = `${firstDigit}${secondDigit}${thirdDigit}${value}`
          console.log(OTP);
          if(firstDigit && secondDigit && thirdDigit && value){
          axios.post("http://localhost:8000/user/otp-verification", {OTP, email, name, mobileNo})
          .then((p)=>{
            console.log(p);
            localStorage.setItem("userToken", p.data);
            navigate('/user');
          })
          .catch(
            (e)=>{
              if(e.response?.status === 400){
                setMessages("Invalid OTP ! Enter The Correct OTP");
              }
              if(e.response?.status === 401)
              setMessages("Internal Server error");
            } 
          );
        }
        }
        break;
      default:
        break;
    }
   
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
     otpInputs[index - 1].current.focus();
    }
    if(e.key==="ArrowLeft" && index>0 ){
      otpInputs[index-1].current.focus();
    }
    if(e.key==="ArrowRight" && index<4){
      otpInputs[index+1].current.focus();
    }
  };

  const handleOnclick=()=>{
    setButtonClicked(true);
    setSeconds(30);
    setMessages(" ");
    axios.post("http://localhost:8000/user/otp-sender", {mobileNo})
    .then((p)=>console.log(p))
    .catch((e)=>console.log(e));
 }
  

  return (
    <div className="bg-white md:bg-[#fc8019] min-h-screen flex items-center justify-center">
      <div className="h-[500px] w-[90%] sm:w-[600px] md:w-[400px] bg-white rounded-lg flex flex-col items-center justify-between py-20">
        <span className="basis-1/3 flex flex-col items-center justify-evenly">
          <h1 className="text-black ">OTP Verification</h1>
          <p> Check Your messages for your OTP </p>
        </span>

        <form className="flex flex-col w-[80%] items-center justify-center basis-1/3">
          <div className="flex justify-evenly items-center ">
            <input
              ref= {otpInputs[0]}
              type="text"
              maxlength="1"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={firstDigit}
              name="firstDigit"
              onChange={(e) => 
                  handleChange(0,e.target.value)
              }
              onKeyDown={(e)=> handleBackspace(0, e)}
              required
              className="shadow appearance-none border rounded  w-[15%] py-2 px-3 text-gray-700 leading-tight text-center focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"
            />
            <input
              ref= {otpInputs[1]}
              type="text"
              maxlength="1"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={secondDigit}
              name="secondDigit"
              onChange={(e) => 
                handleChange(1,e.target.value)
              }
              onKeyDown={(e)=> handleBackspace(1, e)}
              required
              className="shadow appearance-none border rounded w-[15%] py-2 px-3 text-gray-700 leading-tight text-center focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"
            />
            <input
              type="text"
              maxlength="1"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={thirdDigit}
              name="thirdDigit"
              onChange={(e) => 
                handleChange(2,e.target.value)
              }
              onKeyDown={(e)=> handleBackspace(2, e)}
              ref={otpInputs[2]}
              required
              className="shadow appearance-none border rounded w-[15%] py-2 px-3 text-gray-700 leading-tight text-center focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"
            />
            <input
              type="text"
              maxlength="1"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={fourthDigit}
              name="fourthDigit"
              onChange={(e) => 
                handleChange(3,e.target.value)
              }
              onKeyDown={(e)=> handleBackspace(3, e)}
              ref = {otpInputs[3]}  
              required
              className="shadow appearance-none border rounded w-[15%] py-2 px-3 text-gray-700 leading-tight text-center focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"
            />
          </div>
        </form>
        <div className="basis-1/3 flex flex-col items-center justify-evenly">
          <p className="text-center text-red-400" >{messages}</p>
              <div className="text-2xl">{formatTime()}</div>
              <h2>Not Recived OTP? <button className={`transition:colors duration-300 ${buttonclicked ? 'text-gray-400': 'text-red-500'}`} disabled={buttonclicked} onClick={handleOnclick}>Resend Now</button></h2>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
