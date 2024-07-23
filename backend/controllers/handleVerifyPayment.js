import 'dotenv/config'; // Import environment variables
import axios from 'axios'; // Ensure axios is imported
import orderModel from '../models/userorder.js'; // Import your order model

export const handleVerifyPayment = async (req, res) => {
  const { orderId } = req.body; // Extract orderId from request body
  const url = `https://sandbox.cashfree.com/pg/orders/${orderId}`; // URL for Cashfree API

  try {
    // Make a GET request to Cashfree API
    const response = await axios.get(url, {
      headers: {
        'X-Client-Id': process.env.CASHFREE_APP_ID,
        'X-Client-Secret': process.env.CASHFREE_SECRET_KEY,
        'x-api-version': '2023-08-01'
      }
    });

    console.log(response?.data?.order_status);

    // Check if the order_id in the response matches the orderId from the request
    if (response?.data?.order_id !== orderId) {
      return res.status(501).send('Order Id is not valid');
    }

    // Check if the order status is 'PAID'
    if (response?.data?.order_status === 'PAID') {
      console.log('Order is paid');

      // Update the payment status of the order to 'PAID'
      const updatedOrder = await orderModel.findOneAndUpdate(
        { _id: response.data.order_id },
        { paymentStatus: 'PAID' },
        { new: true } // Return the updated document
      );

      if (!updatedOrder) {
        return res.status(404).send('Order not found');
      }

      return res.status(200).send({ msg: 'Payment status updated', order: updatedOrder });
    }

    return res.status(500).send({ msg: 'Internal Server Error' });
  } catch (e) {
    console.log('Error:', e); // Print the error
    return res.status(500).send('Server error'); // Send error response back to the client
  }
};
