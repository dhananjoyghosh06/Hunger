import React, { useState, useEffect } from "react";
import img1 from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";
import axios from "axios";
import img2 from "../assets/profile.png";
import NavMenu from "./NavMenu";
import { FaShoppingCart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
//import jwt from 'jsonwebtoken';

const Navbar = ({ resturantList}) => {
  const [isAuthenticated, setIsauthenticated] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [userToken, setUsertoken] = useState(null);
  const [data, setData] = useState(null);
  const [isNavOpen, setIsnavopen] = useState(false);
  const [profilePicture, setProfilePicture] = useState("");
  const [cityName, setCityName] = useState("Choose Location");
  const [totalItems, setTotalItems] = useState(0);
  // useEffect(()=>{
  //   if(profilePicture){
  //     console.log("hmhm", profilePicture);
  //   }
  // }, [profilePicture])

  useEffect(() => {
    // Fetch user profile data including profile picture URL from the backend
    const fetchUserProfile = async () => {
      try {
        if (data) {
          await axios
            .post("http://localhost:8000/user/getProfileImage", { data })
            .then((promise) => {
              setProfilePicture(promise.data.USER.profImgLink);
            })
            .catch((e) => console.log(e));
        }

        // console.log("Hlw suuman ", Response);
        // setProfilePicture(Response.data.profImgLink);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [data]);

  useEffect(() => {
    const userownToken = localStorage.getItem("userToken");
    if (userownToken) {
      setUsertoken(userownToken);
    }
  }, []);

  useEffect(() => {
    if (userToken) {
      axios
        .post("http://localhost:8000/user/getPayload", { userToken })
        .then((p) => {
          setData(p.data.payload);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [userToken]);

  useEffect(() => {
    if (data) {
      setIsauthenticated(true);
    }
  }, [data]);

  const handleOnclick = (e) => {
    localStorage.removeItem("userToken");
    setIsauthenticated(false);
    setData(null);
    setUsertoken(null);
    setImagelink(null);
  };

  //  console.log(token);

  const toggleButton = () => {
    setisOpen(!isOpen);
  };

  const toggleProfileButton = () => {
    setIsnavopen(!isNavOpen);
  };

  const getData = async (lat, long) => {
    const promise = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=dffa372a10914f0bad594016241205&q=${lat},${long}&aqi=yes`
    );

    return promise.json();
  };
  const gotLocation = async (position) => {
    const result = await getData(
      position.coords.latitude,
      position.coords.longitude
    );
    console.log(result.location.name);
    setCityName(result.location.name);
  };
  const failedtoGet = () => {
    console.log("Error");
  };
  const handleLocation = () => {
    const result = navigator.geolocation.getCurrentPosition(
      gotLocation,
      failedtoGet
    );
  };

  // react redux cart items 
  
  const items = useSelector((state)=>state.cart);
  useEffect(()=>{
    const calculateItems = ()=>{
      const totalItm = items.reduce((acc, item)=>acc+item.quantity,0);
      setTotalItems(totalItm);
    }
    calculateItems();
  },[items]);
  return (
    <div className="relative">
      <div className="h-[100px] bg-white flex justify-center items-center top-0 left-0 w-full z-50 shadow-md ">
        {isAuthenticated && (
          <div className="bg-white-500 w-[100px] h-[80px] flex gap-2 rounded items-center mr-20">
            <IoLocationSharp className="text-orange-500 size-7 " />
            <p className="text-[20px] cursor-pointer" onClick={handleLocation}>
              {cityName}
            </p>
          </div>
        )}
        <div className=" w-[80%] flex gap-5 content-normal">
          <div className="flex basis-1/5 items-center justify-center">
            <img src={img1} alt="" className="h-[100px] w-[100px]" />
          </div>
          <div className="hidden ll:flex basis-2/5 justify-between items-center">
            <Link to={"/"} className="cursor-pointer hover:scale-110">
              Home
            </Link>
            <Link
              to={"/resturants"}
              className="cursor-pointer hover:scale-110"
              state={{ cityName }}
            >
              Resturants
            </Link>
            <Link
              to={"/search"}
              className="cursor-pointer hover:scale-110"
              state={{ resturantList }}
            >
              Search
            </Link>
            <Link src="" className="cursor-pointer hover:scale-110">
              Contact
            </Link>
          </div>
          {!isAuthenticated ? (
            <div className=" hidden ll:flex basis-2/5 gap-2 justify-evenly items-center">
              <div className="rounded-lg bg-[#fc8019] cursor-pointer h-10 w-[100px] flex justify-center items-center hover:scale-110">
                <Link to="/user/sign-up" className="text-white  font-700 ">
                  Sign up
                </Link>
              </div>
              <div className="rounded-lg bg-[#fc8019] cursor-pointer h-10 w-[100px] flex justify-center items-center hover:scale-110">
                <Link to="/user/sign-in" className="text-white font-700  ">
                  Sign in
                </Link>
              </div>
            </div>
          ) : (
            <div className=" hidden ll:flex basis-2/5 items-center justify-around relative">
              <div className="flex items-center gap-2">
              <Link onClick={toggleProfileButton}>
                <img
                  src={profilePicture || img2}
                  alt="Profile Picture"
                  className="cursor-pointer focus:scale-105 transition duration-150 ease-in-out w-[50px] h-[50px] rounded-full ml-[60px]"
                />
              </Link>
              {isNavOpen && <NavMenu />}
              <Link
                to="/"
                className="text-orange-500 font-700  "
                onClick={handleOnclick}
              >
                Log Out
              </Link>
              </div>
              <Link to={'/user/myCart'}><FaShoppingCart className="size-7 text-orange-500 cursor-pointer relative"/>
              <p className="absolute right-10 top-8 w-[18px] h-[18px] bg-blue-500 items-center flex justify-center rounded-full text-[10px] text-white">{totalItems}</p>
              </Link>
              
            </div>
          )}
        </div>
        <Menu
          className="absolute right-20 top-9 size-8 cursor-pointer text-[#fc8019] md:hidden"
          onClick={toggleButton}
        />
        <div className="absolute right-0 top-0 h-[100vh]">
          {isOpen && (
            <MobileNav
              isOpen={isOpen}
              toggle={toggleButton}
              setisOpen={setisOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
