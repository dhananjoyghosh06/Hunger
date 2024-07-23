import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";

import Homepage from "./pages/Homepage";
import Signup from "./layout/Signup";
import OtpVerification from "./layout/OtpVerification";
import Login from "./layout/Login";
import LoginOtpVerification from "./layout/LoginOtpVerification";
import UpdateProfile from "./layout/UpdateProfile";
import UpdateProfileImage from "./layout/UpdateProfileImage";

import Resturants from "./components/Resturants.jsx";
import Search from "./components/Search.jsx";
import Details from "./components/Details.jsx";

import Pizza from "./layout/Pizza.jsx";
import Burger from "./layout/Burger.jsx";
import Biriyani from "./layout/Biriyani.jsx";
import Pasta from "./layout/Pasta.jsx";
import Cart from "./layout/Cart.jsx";
import MyCart from "./layout/Cart.jsx";
import UserAddress from "./layout/UserAddress.jsx";
import PaymentSuccess from "./layout/PaymentSuccess.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Homepage />
          </Layout>
        }
        title="Homepage"
      />
      <Route path="/user/sign-up" element={<Signup></Signup>} title="Sign up" />
      <Route path="/user/sign-in" element={<Login></Login>} title="Sign up" />
      <Route
        path="/user/otp-verification"
        element={<OtpVerification></OtpVerification>}
        title="otp-verification"
      />
      <Route
        path="/user/login/otp-verification"
        element={<LoginOtpVerification></LoginOtpVerification>}
        title="otp-verification"
      />
      <Route
        path="/user/updateProfile"
        element={<UpdateProfile />}
        title="Update User info"
      />
      <Route
        path="/user/updateProfileImage"
        element={<UpdateProfileImage />}
        title="Update user Profile Image"
      />
      <Route
        path="/resturants"
        element={<Resturants/>}
        title="Resturants"
      />
      <Route
        path="/search"
        element={<Search/>}
        title="search"
      />
      <Route
        path="/details"
        element={<Details/>}
        title="details"
      />
      <Route
        path="/foodMenu/pizzas"
        element={<Pizza/>}
        title="pizzas"
      />
      <Route
        path="/foodMenu/burgers"
        element={<Burger/>}
        title="burgers"
      />
      <Route
        path="/foodMenu/pastas"
        element={<Pasta/>}
        title="pastas"
      />
      <Route
        path="/foodMenu/biriyanis"
        element={<Biriyani/>}
        title="biriyanis"
      />
      <Route
        path="/user/myCart"
        element={<MyCart/>}
        title="Cart"
      />
       <Route
        path="/user/userAddress"
        element={<UserAddress/>}
        title="userAddress"
      />
      <Route
        path="/paymentsuccess"
        element={<PaymentSuccess/>}
        title="paymentSuccess"
      />
      
      <Route path="*" element={<Navigate to="/" />} />
      
    </Routes>
  );
};

export default AppRoutes;
