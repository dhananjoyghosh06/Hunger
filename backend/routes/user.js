import express from 'express';
import {handleotpVerification} from '../controllers/otp-verification.js'
import handleUserSignUp from '../controllers/user.js'
import handleUserLogin from '../controllers/login.js';
import {SendOtptoUserForSignUp} from '../controllers/otp-verification.js'
import { SendLoginOtptoUser, handleLoginotpVerification } from '../controllers/loginOtpVerification.js';
import { getPayload } from '../controllers/getPayload.js';
import {updateUserProfile } from '../controllers/updateProfile.js';
import {updateProfileImage} from '../controllers/updateUserProfileImage.js'
//import { cheakForAuthenticationCookie } from '../middlewares/auth.js';
import { upload } from '../middlewares/multer.js';
import {updateProfileImageLink} from '../controllers/updateProfileImageLink.js'
import { getProfileImage } from '../controllers/getProfile.js';
import { handlePayment } from '../controllers/handlePayment.js';
import bodyParser from 'body-parser';

const router = express.Router();    

router.post('/sign-up', handleUserSignUp)
router.post('/otp-verification', handleotpVerification);
router.post('/otp-sender', SendOtptoUserForSignUp);
router.post('/sign-in', handleUserLogin);
router.post('/login/otp-sender', SendLoginOtptoUser);
router.post('/login/otp-verification', handleLoginotpVerification);
router.post('/getPayload', getPayload);
router.post("/uploadUserProfileimage", upload.single('image') ,updateProfileImage);
router.post('/profileImageLinkUpdate', updateProfileImageLink);
router.post('/getProfileImage', getProfileImage);
router.post('/updateProfile', updateUserProfile);
router.post('/api/create_checkout_session', handlePayment);
// router.post('/webhook', bodyParser.raw({ type: 'application/json' }), handlePaymentWebHook);


export default router;
