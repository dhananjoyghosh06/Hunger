import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [messages,setMessages] = useState(" ");
  const navigate = useNavigate();

  const handleDataShare = () => {
    localStorage.setItem('mobileNo', mobileNo);
  }

  const handleOnSubmit = (e)=>{
    e.preventDefault();
    console.log(mobileNo);
    axios.post("http://localhost:8000/user/sign-in", {mobileNo})
    .then((p)=>{
      handleDataShare();
      axios.post("http://localhost:8000/user/login/otp-sender", {mobileNo})
      .then((p)=>console.log(p))
      .catch((e)=>console.log(e));
      navigate('/user/login/otp-verification');
    }
    )
    .catch((e)=>{
      if(e.response?.status === 400){
        setMessages("Mobile No Doesn't Exist");
      }
      if(e.response?.status === 401){
        setMessages("Internal Server Error");
      }
    }  
    )
  }
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <div className="bg-white md:bg-[#fc8019] min-h-screen flex items-center justify-center">
      <div className="h-[500px] w-[90%] sm:w-[600px] md:w-[400px] bg-white rounded-lg flex flex-col items-center justify-evenly ">
        <div><h1 className="basis-1/6">Sign in </h1></div>
        <form className="flex flex-col justify-evenly items-center basis-2/5 w-[80%]" onSubmit={handleOnSubmit}>
          <input
            type="tel"
            placeholder="Mobile No"
            name="mobileNo"
            value={mobileNo}
            onChange={(e)=>{setMobileNo(e.target.value)}}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"
          />
          <button
            type="submit"
            className=" text-white flex justify-center items-center bg-[#fc8019] w-full h-10 rounded cursor-pointer font-bold"
          >
            Genetare OTP
          </button>
        </form>
        <p className="text-red-500">{messages}</p>
        <div className="basis-1/6 w-[80%] flex flex-col items-center justify-center">
            <h2 className="text-[15px]">New to HUNger? <Link className="text-[15px]" to="/user/sign-up"> Create Account</Link></h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
