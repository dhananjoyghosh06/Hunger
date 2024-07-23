import axios from "axios";
import { useState } from "react";

const UserAddress = () => {
    const [addressline1, setAddressline1] = useState('');
    const [addressline2, setAddressline2] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [pincode, setPincode] = useState('');
    const [message, setMessage] = useState(" ");

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const userToken = localStorage.getItem('userToken');
        axios.post('http://localhost:8000/delhivery/addUserAddress', {userToken,addressline1, addressline2,city,district,state,country,pincode})
        .then((p)=>{
            console.log(p);
            setMessage(p.data.msg);
        })
        .catch((e)=>setMessage("Internal Server Error"));
    }
  return (
    <div className="flex justify-center items-center h-[100vh] bg-orange-500">
      <form className="w-[80%] sm:h-[90vh] h-[95vh] grid grid-cols-1 items-center bg-white" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center px-12">
          <h2 className="font-bold text-orange-500 text-[40px]">ADDRESS</h2>
          <p className="text-center text-blue-500">{message}</p>
        </div>
        <div className=" sm:flex sm:flex-row sm:items-center sm:justify-center  flex flex-col justify-between items-center gap-2">
        <div className="sm:w-[45%] w-[80%]">
          <h2>Address Line 1 </h2>
          <input
            type="text"
            name="addressline1"
            value={addressline1}
            onChange={(e)=>{setAddressline1(e.target.value)}}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"
          />
        </div>
        <div   className="sm:w-[45%] w-[80%]">
          <h2>Address Line 2 </h2>
          <input
            type="text"
           
            name="addressline2"
            value={addressline2}
            onChange={(e)=>{setAddressline2(e.target.value)}}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"
          />
        </div>
        </div>
        <div className=" sm:flex sm:flex-row sm:items-center sm:justify-center  flex flex-col justify-between items-center gap-2">
        <div className="sm:w-[45%] w-[80%]">
          <h2>City </h2>
          <input
            type="text"
            
            name="city"
            value={city}
            onChange={(e)=>{setCity(e.target.value)}}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"
          />
        </div>
        <div   className="sm:w-[45%] w-[80%]">
          <h2>District </h2>
          <input
            type="text"
           
            name="district"
            value={district}
            onChange={(e)=>{setDistrict(e.target.value)}}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"
          />
        </div>
        </div>
        <div className=" sm:flex sm:flex-row sm:items-center sm:justify-center  flex flex-col justify-between items-center gap-2">
        <div  className="sm:w-[45%] w-[80%]">
          <h2>State</h2>
          <input
            type="text"
            
            name="state"
            value={state}
            onChange={(e)=>{setState(e.target.value)}}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"
          />
        </div>
        <div  className="sm:w-[45%] w-[80%]">
          <h2>Country</h2>
          <input
            type="text"
            
            name="country"
            value={country}
            onChange={(e)=>{setCountry(e.target.value)}}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"
          />
        </div>
        </div>
        <div className=" sm:flex sm:flex-row sm:items-center sm:justify-center  flex flex-col justify-between items-center gap-2">
        <div  className="sm:w-[45%] w-[80%]">
      <h2>Pin Code</h2>
      <input
        type="text"
       
        name="country"
        value={pincode}
        onChange={(e)=>{setPincode(e.target.value)}}
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:bg-[#fc8019] focus:text-white focus:font-bold focus:scale-105 transition duration-150 ease-in-out"
      />
    </div>
    <button type="submit" className=" text-white flex  justify-center items-center bg-[#fc8019] sm:w-[45%] w-[80%] h-10 rounded cursor-pointer font-bold">
        Save
      </button>
        </div>
      </form>
    </div>
  );
  
      
};

export default UserAddress;
