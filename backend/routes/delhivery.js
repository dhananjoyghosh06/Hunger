import express from 'express';
import { saveAddress } from '../controllers/saveAdress.js';
import { handleGetAddressPayload } from '../controllers/handleGetAddressPayload.js';
const router = express.Router();

router.post('/addUserAddress', saveAddress);
router.post('/getAddressPayload', handleGetAddressPayload);

export default router;

