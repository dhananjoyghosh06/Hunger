import { Link } from "react-router-dom";
import {  useRef, useEffect } from "react";
import {X} from 'lucide-react';

const MobileNav = ({isOpen,setIsOpen, toggle}) => {
  const sideBarRef=useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!sideBarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
},[isOpen,setIsOpen])

  return (
    <div
      className={` bg-orange-500 h-[100%] w-[300px] sidebar z-999`}  ref={sideBarRef}
    >
      <X className=" absolute left-3 top-2 text-white size-8 cursor-pointer" onClick={toggle}/>
      <div className="flex flex-col h-[100%] items-center justify-evenly">
        <div className="flex flex-col basis-1/2 justify-evenly items-center">
          <Link
            to=""
            className="cursor-pointer hover:scale-110 font-bold text-2xl text-white"
          >
            Home
          </Link>

          <Link
            to="/resturants"
            className="cursor-pointer hover:scale-110 font-bold text-2xl text-white"
          >
            Restutants
          </Link>

          <Link
            to="/search"
            className="cursor-pointer hover:scale-110 font-bold text-2xl text-white"
          >
            Search
          </Link>

          <Link
            to=""
            className="cursor-pointer hover:scale-110 font-bold text-2xl text-white"
          >
            Contact
          </Link>
        </div>
        <div className="flex gap-2 justify-evenly items-center basis-1/2 ">
          <div className="rounded-lg bg-white cursor-pointer h-10 w-[100px] flex justify-center items-center hover:scale-110">
            <Link to="/user/sign-up" className="text-orange-500 font-bold  font-700  ">
              Sign up
            </Link>
          </div>
          <div className="rounded-lg bg-white cursor-pointer h-10 w-[100px] flex justify-center items-center hover:scale-110">
            <Link to="/user/sign-in" className="text-orange-500 font-700 font-bold ">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
