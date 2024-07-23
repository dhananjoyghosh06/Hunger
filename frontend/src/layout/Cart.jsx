import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { add, remove, removeItem } from "../store/cartSlice";
import { loadStripe } from '@stripe/stripe-js';
import {load} from '@cashfreepayments/cashfree-js';

const cashfree = await load({
  mode:"sandbox" //or production
});

function MyCart() {
  const [price, setPrice] = useState(0);
  const [totalAmount,setTotalAmount] = useState(0);
  const [addressline1, setAddressline1] = useState("");
  const [addressline2, setAddressline2] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [userId, setUserID] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [deliveryDetails,setDeliveryDetails] = useState(null);
  // useEffect(()=>{
  //   console.log("bhag" ,deliveryDetails);
  // },[deliveryDetails])
  
    
  const userToken =  localStorage.getItem('userToken');
  const items = useSelector((state) => state.cart);
  
  const disPatch = useDispatch();

  const handleRemove = async(id) => {
    disPatch(remove(id));
   
  };

   
  
  //get delivery details
  useEffect(()=>{
    axios.post("http://localhost:8000/delhivery/getAddressPayload", { userToken })
    .then((promise) => {
      setAddressline1(promise.data.Address.addressLine1);
      setAddressline2(promise.data.Address.addressLine2);
      setCity(promise.data.Address.City);
      setDistrict(promise.data.Address.Dist);
      setState(promise.data.Address.State);
      setCountry(promise.data.Address.Country);
      setPincode(promise.data.Address.Pin);
      const arr =[];
      arr.push(promise.data.Address.addressLine1,promise.data.Address.addressLine2,promise.data.Address.City,promise.data.Address.Dist,promise.data.Address.State,promise.data.Address.Country,promise.data.Address.Pin);
      setDeliveryDetails(arr);
    })
    .catch((e) => console.log("In"));
  },[userToken])
  
 
    //Price Update 
    
    useEffect(() => {
      const calculatePrice = () => {
        const tempPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setPrice(tempPrice);
        if(items.length === 0){
          setTotalAmount(0);
        }else{
          setTotalAmount(tempPrice + 40);
        }
        
      };
      calculatePrice();
    }, [items]);
    
    useEffect(() => {
      const calculateTotalItems = () => {
        const totalQuanity = items.reduce((acc, item) => acc + (item.quantity), 0);
        setTotalQuantity(totalQuanity);
      };
      calculateTotalItems();
    }, [items]);
    
    
  
    // Save cart state to local storage whenever it changes
    
    ///function for generate random id using crypto
    const geneRateRandomId = ()=>{
      const orderId = crypto.randomUUID().toString(30).substring(2,16)+ Math.floor(Math.random()*100000);
      return orderId;
    }
    //handle payment
    
    useEffect(()=>{
      const getUserData = ()=>{
        axios.post('http://localhost:8000/user/getPayload',{userToken})
        .then((p)=>{
          setUserID(p.data.payload.userId);
        })
        .catch((e)=>console.log(e));
       }
       getUserData();
    },[userToken])
    
    const handlePayment = async()=>{
      const orderId=geneRateRandomId();
      
      const stripe = await loadStripe('pk_test_51PNtmw2L51SjT2dfjbEUsYVw5QZvVT23xi0sgEoSiYRVcjNSfrV3uO1IfL4NiEekMPDZ3rviH0bhtdehDheV9pzj006NhNy8Lg');
  
      axios.post("http://localhost:8000/user/api/create_checkout_session", {
        items:items,
        orderId:orderId,
        totalAmount:totalAmount,
        totalQuantity:totalQuantity,
        userToken:userToken,
        address:[addressline1,addressline2,city,district,state,country,pincode],
      })
      .then((response)=>{
        console.log(response.data.payment_session_id);
        let checkoutOptions = {
            paymentSessionId: response.data.payment_session_id,
            
            redirectTarget: "_self" //optional ( _self, _blank, or _top)
        }
        cashfree.checkout(checkoutOptions);
    })
    .catch((e)=> console.log(e));
  
    }


    //Payment by Cashfree
   

    const handlePaymentbyCashfree = ()=>{
      axios.post("http://localhost:8000/delhivery/payment", {
        items:items,
        totalAmount:totalAmount,
        // totalQuantity:totalQuantity,
        userToken:userToken,
        address:[addressline1,addressline2,city,district,state,country,pincode],
      })
      .then((response)=>{
        console.log(response.data.payment_session_id);
        let checkoutOptions = {
            paymentSessionId: response.data.payment_session_id,
            
            redirectTarget: "_self" //optional ( _self, _blank, or _top)
        }
        cashfree.checkout(checkoutOptions);
    })
    .catch((e)=> console.log(e));
    }

  return (
    <div className="flex gap-10 bg-gray-100">
      <div className="bg-white  flex flex-col gap-3 w-[65%]">
        <h2 className="text-[30px] font-bold  px-4 text-orange-500 ">Cart</h2>

        {items.map((item) => {
            const plusToogle = async()=>{
              disPatch(add(item));
              
            }
            const minusToogle = async()=>{
              disPatch(removeItem(item));
             
            }
            return (
              <div className="flex gap-5 px-4 bg-gray-200" key={item.id}>
                <div className="items-center flex justify-center h-40 w-28">
                  <img className="" src={item.imageUrl} />
                </div>
                <div className="flex flex-col gap-8 py-2">
                  <div className="flex flex-col gap-2 ">
                    <h2 className="font-bold">{item.name}</h2>
                    <h3 className="font-bold text-[18px] ">₹{item.price}</h3>
                    <p className="flex gap-2"><FaMinus className="size-[15px] mt-1 cursor-pointer" onClick={minusToogle}/> {item.quantity} <FaPlus className="size-[15px] mt-1 cursor-pointer" onClick={plusToogle}/></p>
                  </div>
                  <button
                    className="font-bold pb-1 text-orange-500"
                    onClick={() => handleRemove(item.id)}
                  >
                    {" "}
                    Remove Item
                  </button>
                </div>
                <p className="text-[12px] mt-3">Delhivery By 60 minutes</p>
              </div>
            );
          
          
        })}

        <div className="w-[100%] h-[100px]  flex items-center justify-center">
          <div className="h-[80%] w-[95%] bg-gray-100 flex justify-around items-center">
            <h2>
              {addressline1}, {addressline2}, {city}, {district}, {state},
              {country},{pincode}
            </h2>
            <Link
              className="w-20 h-7 bg-black flex items-center justify-center text-white"
              to={"/user/userAddress"}
            >
              <button className="font-bold">Change</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[35%] bg-white flex flex-col h-[100vh]">
        <h2 className="text-[30px] font-bold  px-8 text-gray-300">
          Price Details
        </h2>
          
        <div className="flex w-[100%] h-[80%] bg-white items-center justify-center">
          <div className="w-[87%] h-[95%] bg-gray-200 flex flex-col justify-between py-10">
            <div className="flex flex-col gap-4">
            <div className="px-10 flex justify-between">
              <h4 className="font-bold text-[15px]">Prices({items.length})</h4>
              <h4 className="text-[15px]">₹ {price}</h4>
            </div>
            <div className="px-10 flex justify-between">
              <h4 className="font-bold text-[15px]">Delhivery Charges</h4>
              <h4 className="text-[15px]">₹ 40</h4>
            </div>
            </div>

            <div className="flex flex-col gap-5">
              <div><hr className="font-bold"/></div>
            <div className="px-10 flex justify-between">
              <h4 className="font-bold text-[15px]">Total Amount</h4>
              <h4 className="text-[15px]">₹ {totalAmount}</h4>
            </div>
            </div>  
          </div>    
        </div>
        <div className=" h-[20%] flex items-center justify-center">
        {items.length >= 1 ? <Link className="h-[40px] w-[100px] bg-orange-500 text-black flex items-center justify-center" onClick={handlePaymentbyCashfree}>Payment</Link> : null
}
        </div>
      </div>
    </div>
  );
}

export default MyCart;
