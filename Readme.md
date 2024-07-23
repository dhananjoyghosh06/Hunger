
# Hunger

It is Full stack Robust Online Food Ordering web application.
This is fully functional application where users can order anything from home, Any Resturant  can be added .


# Hi, I'm Dhananjoy! 👋


## 🚀 About Me
I'm Dhananjoy Ghosh, currenty aspiring as B. tech student in Maulana Abul Kalam Azad University & Technology, West Bengal.

I have a good practice and knowledge in M.E.R.N stack web development. I also do have excellent understanding on Data Structures and Algorithms, Object Oriented Programming, Database Management System, Computer Networking, Operating System.


![Logo](https://res.cloudinary.com/myhunger/image/upload/v1720332980/logo/20240307_102131_0000-removebg-preview_un03kp.png)


## Tech Stack

**Client:** HTML, CSS, JAVASCRIPT ,React, Redux,React Router Dom, TailwindCSS, CLOUDINRY, MULTER, TWILIO, AXIOS, React icons .

**Server:** Node, Express, nodemon, JWT, AXIOS . 

**Database:** MongoDB

**Payment Gateway:** Cashfree


## Features

- Sign Up and Login authentication
- SMS OTP based authentication
- User Friendly Interface
- Choosing option of your current location
- Update profile and Address
- Secure Database
- Cross platform
- Fully Responsive
- Cookies authorization
- Multiple menu 
- Multiple nearby Resturants 
- Searching by Resturants name 
- Payment Integration
- 


## API Reference

#### Get Resturant Details

```
 https://restaurants222.p.rapidapi.com/search
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `url` | `string` | 'https://restaurants222.p.rapidapi.com/search' |
| `'headers` | `object` |  headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '***************',
        'X-RapidAPI-Host': '************88'
      } |
| `data` | `object` | encodeParams |
      

#### Go for Payment

```http
  POST http://localhost:8000/delhivery/payment
```

| Parameter | Type     | Description                             |
| :-------- | :------- | :--------------------------------       |
| `items`      | `string` | items       |
| `totalAmount'| `Number` | totalAmount |
| `userToken`  | `string` | userToken   |
| `address`    | `object` | address     |
| `items`      | `string` | items       |
| `items`      | `string` | items       |
| `items`      | `string` | items       |



### installation 
    ##backend installation
mkdir backend
cd backend 
npm init .
npm i
npm i cors dotenv express mongoose mongodb nodemon body-parser 
npm i axios cloudinary multer js-cookie jsonwebtoken cookie-parser  cashfree-sdk twilio 

# backend run 

npm run dev

    #frontend installation
npm create vite@latest .
cd frontend
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i axios js-cookie lucide-react react-router-dom react-icons @reduxjs/toolkit redux-persist @cashfreepayments/cashfree-js

# frontend run 

npm run dev



## 🛠 Skills
Javascript, HTML, Tailwind CSS, React, Node, Express, MongoDB, M.E.R.N stack, cloudinary, Twilio, Multer, Payment Integrations. 


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### MongoDB
`MONGODB_CONNECTION_STRING`

#Twilio

`TWILIO_ACCOUNT_SID`
`TWILIO_AUTH_TOKEN`
`TWILIO_MOBILE_NO`

#Cloudinary

`CLOUDINARY_CLOUD_NAME`
`CLOUDINARY_API_KEY`
`CLOUDINARY_API_SECRET`

### secret

`SECRET`

###Cashfree 

`CASHFREE_APP_ID`
`CASHFREE_SECRET_KEY`



## Roadmap

-Created two directories frontend and backend 

- Implemented Hompage  

- Implemented SignUp and Login Authentication

- Implemented Resturants section

- Implemented Menu Section 

- Implemented Update Profile & Profile photo updation features

- Implemneted Cart Section 

- Integrated React-Redux with cart

- Integrated Payment Gateway (Cashfree) 

- Handled success , failure and pending payemnt status.

- created Another directory for Resturants where anybody can register and sell their food into it 

### Need To Improve 

- implement live delivery status for users 

- need to show tracking for the orders of the users 

- needed to make the code more readable. 



## Optimizations

-- Made search options which can filter the resurants by it's name or food which is easiser to get food for users.

-- Displayed user's orders to make a good impact on user 

-- 


## Screenshots

![App Screenshot](https://res.cloudinary.com/myhunger/image/upload/v1720335282/Hunger/Screenshot_77_cocgde.png)
![App Screenshot](
https://res.cloudinary.com/myhunger/image/upload/v1720335282/Hunger/Screenshot_74_jckzss.png
)
![App Screenshot](https://res.cloudinary.com/myhunger/image/upload/v1720335281/Hunger/Screenshot_73_gqa1ud.png)
![App Screenshot](https://res.cloudinary.com/myhunger/image/upload/v1720335281/Hunger/Screenshot_75_miemmz.png)
![App Screenshot](https://res.cloudinary.com/myhunger/image/upload/v1720335281/Hunger/Screenshot_78_imzjbq.png)
![App Screenshot](https://res.cloudinary.com/myhunger/image/upload/v1720335281/Hunger/Screenshot_76_uitpv3.png)
![App Screenshot](https://res.cloudinary.com/myhunger/image/upload/v1720335282/Hunger/Screenshot_80_aj9gf9.png)
![App Screenshot](https://res.cloudinary.com/myhunger/image/upload/v1720335283/Hunger/Screenshot_82_kc7qxm.png)
![App Screenshot](https://res.cloudinary.com/myhunger/image/upload/v1720335282/Hunger/Screenshot_83_jixwjz.png)
