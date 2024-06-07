import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
const PaymentSuccess = () => {

  const orderDetails = useSelector(state=>state.orderDetails);
  console.log(orderDetails);
  return (
    <div>PaymentSucess !! <Link to={'/user/mycart'} >Go to dashboard </Link></div>
    

  )
}

export default PaymentSuccess