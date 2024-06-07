import React, { useEffect } from 'react'
import profile from '../assets/profile.png'; 
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UpdateProfileImage = () => {
    const [image, setImage] =  useState(null);
    const [cloudLink, setCloudLink] = useState(null);
    const [userToken , setUsertoken] = useState(null);
    const [messages, setMessages] = useState(" ");
    const [isVisible, setIsVisible] = useState(false);
    const [profile2, setProfile2 ] = useState(null);
    
    useEffect(()=>{
      const userownToken = localStorage.getItem("userToken");
      if(userownToken){
        //console.log("userownToken is ", userownToken)
        setUsertoken(userownToken);   
      }    
    }, [])
    
    useEffect(()=>{
      if(cloudLink && userToken){
        axios.post("http://localhost:8000/user/profileImageLinkUpdate", {cloudLink, userToken})
        .then((p)=>{
          if(p.response?.status===200) {
            setMessages("Profile Image uploaded successfull");
          }
        })
        .catch((e)=>{
          if(e.response?.status===400){
            setMessages("Internal Server error !")
          }
        })
      }   
      
    }, [cloudLink])
    useEffect((p)=>{
      console.log(messages);
    }, [messages])

    const handleSubmit = async(e)=>{
      e.preventDefault();
      console.log("upload hoyeche")
      const formData = new FormData();
      formData.append("image", image);
      
      const result = await axios.post("http://localhost:8000/user/uploadUserProfileimage", formData,userToken, {
        headers: { "Content-Type": "multipart/form-data" },
     })
     .then((p)=>{
      console.log(p.data.imageUrl);
      setCloudLink(p.data.imageUrl);
      setProfile2(p.data.imageUrl);
      setMessages("Profile Image Uploaded successfully");
      setIsVisible(true);
     })
     .catch((e)=>{
      console.log(e);
    });
    }   

  return (
 
    <div className="bg-white md:bg-[#fc8019] min-h-screen flex items-center justify-center">
    <div className="h-[500px] w-[90%] sm:w-[600px] md:w-[400px] bg-white rounded-lg flex flex-col items-center justify-between gap-20 py-10"> 
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col justify-evenly items-center gap-10'>
          <div className='flex flex-col justify-evenly items-center gap-1'>
         {isVisible && <Link to={'/'} className="cursor-pointer hover:scale-110 text-green-500 font-[10px]">Go to Dashboard</Link>}
            <p className="text-center text-orange-400" >{messages}</p>
          <h1>Update Your Profile Image</h1></div>
            <img className='w-[200px] h-[200px] rounded-full cover border-4 border-solid border-orange-600' src = {image ? URL.createObjectURL(image) : profile2 || profile} alt =""/>
            <div className='flex justify-evenly items-center'>
            <input className='font-bold text-white w-[200px] mt-2' type="file" accept='image/*' onChange={(event)=>{
                const file = event.target.files[0];
                console.log(file.name);
                if(file && file.type.substring(0,5)==="image"){
                  setImage(file); 
                }
        }}/>
        <button type="submit" className=" text-white flex justify-center items-center bg-[#fc8019] w-20 h-10 rounded cursor-pointer font-bold">
        Upload
        </button>
  
          </div>
         </div>
        </form>
    </div>
    </div>
  )
}


export default UpdateProfileImage;