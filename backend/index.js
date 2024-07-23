import express, { urlencoded } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoute from './routes/user.js';
import addressRoute from './routes/delhivery.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

// import { cheakForAuthenticationCookie } from './middlewares/auth.js';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(()=>{
    console.log("MongoDb Connected");
})

const app = express();

app.use(express.json());
// app.use('/images', express.static('backend'));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/user", userRoute);
app.use('/delhivery', addressRoute);


app.listen(8000, ()=> console.log("Server Started at localhost:8000"));
