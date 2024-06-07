import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [messages, setMessages] = useState(" ");
  const navigate = useNavigate();

  const handleDataShare = () => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('mobileNo', mobileNo);
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    
     axios.post("http://localhost:8000/user/sign-up", {name, email, mobileNo})
    .then((p)=>{
      console.log(p);
      handleDataShare();
      // Suman
      axios.post("http://localhost:8000/user/otp-sender", {mobileNo})
      .then(result=> console.log(result))
      .catch(err => console.log(err))
      navigate('/user/otp-verification');
      
      })
    .catch((e)=>{
      if(e.response?.status === 400){
        setMessages("Email or Mobile Already exist");
      }
      if(e.response?.status === 401)
      setMessages("Internal Server error");
      if(e.response?.status === 402 ){
        setMessages("Mobile No is not Valid");
      }
      if(e.response?.status === 403 ){
        setMessages("Email is not valid ");
      }
      if(e.response?.status === 405){
        setMessages("Email & Mobile No are not valid !")
      }
    });
  }
 
  return (
    <div className="bg-white md:bg-[#fc8019] min-h-screen flex items-center justify-center">
      <div className="h-[500px] w-[90%] sm:w-[600px] md:w-[400px] bg-white rounded-lg flex flex-col items-center justify-evenly ">
        <span >
          <h1 className="text-black">Sign up</h1>
          <span>
            or{" "}
            <Link to="/user/sign-in" className="text-[#fc8019] text-[15px]">
              Sign in to your account
            </Link>
          </span>
        </span>

        <form onSubmit={handleSubmit} className="w-[80%] flex flex-col justify-between gap-6">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"
          />
          <input
            type="tel"
            placeholder="Mobile No"
            name="mobileNo"
            value={mobileNo}
            onChange={(e)=>{setMobileNo(e.target.value)}}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"
          />
          <p className="text-center text-red-400">{messages}</p>
          <div />
          <button type="submit" className=" text-white flex justify-center items-center bg-[#fc8019]  h-10 rounded cursor-pointer font-bold">
            Genetare OTP
          </button>
        </form>  
      </div>
    </div>
  );
};

export default Signup;
