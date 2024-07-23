import express from 'express';
import { saveAddress } from '../controllers/saveAdress.js';
import { handleGetAddressPayload } from '../controllers/handleGetAddressPayload.js';
import {handlePaymentbyCashfree} from '../controllers/handlePaymentbyCashfree.js';
import {handleVerifyPayment} from '../controllers/handleVerifyPayment.js';
import { handleMyOrders } from '../controllers/handleMyOrders.js';
const router = express.Router();

router.post('/addUserAddress', saveAddress);
router.post('/getAddressPayload', handleGetAddressPayload);
router.post('/payment', handlePaymentbyCashfree);
router.post('/verifyPayment', handleVerifyPayment);
router.post('/orders', handleMyOrders);

export default router;

