import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img1 from '../assets/profile.png';

const ProfileForm = () => {

  
  const [selectedImage, setSelectedImage] = useState(null);
  const [userToken, setUsertoken] = useState(null);
  const [isOpen , setisOpen] = useState(false);
  const [name , setName ] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(()=>{
      const userownToken = localStorage.getItem("userToken");
      if(userownToken){
        //console.log("userownToken is ", userownToken)
        setUsertoken(userownToken); 
      }    
    }, [])

    const handleSubmit = async (event) => {

        event.preventDefault();
        if(userToken){
            console.log("Submitted", userToken);
            await axios.post('http://localhost:8000/user/updateProfile',{userToken, name, email, address})
            .then((p)=>{
                if(p.response?.status === 200)
                setMessages("User Info UPdated Sucessfully");
            })
            .catch((e)=>{
              if(e.response?.status === 401)
              setMessages("Internal Server error");
              if(e.response?.status === 402 )
              setMessages("Email Already in use in another account");
            });
        }
      };

  
  
  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file ) { //file.type.substring(0, 5) === 'image/'
  //     setSelectedImage(URL.createObjectURL(file));
  //   } else {
  //     console.warn('Please select a valid image file (JPEG, PNG, etc.)');
  //     setSelectedImage(null); // Clear preview if invalid file selected
  //   }
  // };

  return (
    <div className="bg-white md:bg-[#fc8019] min-h-screen flex items-center justify-between">
    <div className="w-[80%] mx-auto bg-white p-8 my-10 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-8">Edit Profile</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>        
    <div>
      <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Name</label>
      <input type="text"  name="name" value={name} onChange={(e)=>setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"/>
    </div>
    <div>
      <label htmlFor="Address" className="block text-sm font-medium text-gray-700">Address</label>
      <input type="text"  name="address" value={address} onChange={(e)=>setAddress(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"/>
    </div>
    <div>
      <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
      <input type="text"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"/>
    </div>
    {/* <div className='w-[100px] h-[100px] '>
      <label htmlFor="profile-picture-input">
        <img
          src={ selectedImage || img1}
          alt="Profile Picture"
         className='cursor-pointer focus:scale-105 transition duration-150 ease-in-out'
          onClick={() => document.getElementById('profile-picture-input').click()}
        />
      </label>
      <input
        id="profile-picture-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        hidden // Hide the actual file input    
      />
    </div> */}
         
    </div>
  <div className='flex justify-between items-center'>
      <button type="submit" className=" text-white flex justify-center items-center bg-[#fc8019] w-20 h-10 rounded cursor-pointer font-bold">
        Save
      </button>
      <p className="text-center text-red-400" >{messages}</p>
  </div>   
  </form>
</div>
</div>
  );
};

export default ProfileForm;
