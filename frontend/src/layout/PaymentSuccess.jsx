import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { removeAll } from '../store/cartSlice';


const PaymentSuccess = () => {
  // const [orderId,setOrderId] = useState(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  console.log(params);
  const orderId = params.get('OrderId');

  const dispatch  = useDispatch();
  const handleClearCart = ()=>{
    dispatch(removeAll());
  }
  useEffect(()=>{
    const verifyPayment = async()=>{
      await axios.post("http://localhost:8000/delhivery/verifyPayment",{orderId})
      .then((r)=>{
        console.log(r); 
        console.log(r.data.order.paymentStatus)
        if(r?.data?.order?.paymentStatus === 'PAID'){
          console.log("hello");
          handleClearCart();
        }
      })
      .catch((e)=>console.log(e))
    }
    verifyPayment();
      
  },[])
  return (
    <div>PaymentSucess !! <Link to={'/user/mycart'} >Go to dashboard </Link></div>
    

  )
}

export default PaymentSuccess