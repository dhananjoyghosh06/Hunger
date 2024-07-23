import Navbar from "../components/Navbar";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
import { add, remove } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../assets/margaerita.webp";
import chickenPizza from '../assets/chickenPizza.jpg';
import vegPizza from '../assets/vegPizza.webp';
import cheesePizza from '../assets/cheesePizza.jpg';
import muttonPizza from '../assets/muttonPizza.jpg';
import onionPizza from '../assets/onionPizza.png';
import capcicumPizza from '../assets/capcicumPizza.jpg';
import tomatoPizza from '../assets/tomatoPizza.jpg';
import tandooriPizza from '../assets/tandooriPizza.jpg';
import masroomPizza from '../assets/masroomPizza.webp';

const Pizza = () => {
  const disPatch = useDispatch();
  const handleAdd = (product)=>{
    disPatch(add(product));
  }
  const handleOnclick = ()=>{
    console.log("hlw world");
  }
  
  return (
    <div className=" w-full">
      <Navbar className="z-50" />

      <div className="flex flex-col justify-between items-center">
        
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="flex flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">Veg Pizza</h1>
                <h3 className="text-[20px]">₹ 125</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.4</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <div
              className="w-[200px] items-center flex relative"
              
            >
              <img src={vegPizza} className="w-[200px] h-[150px]" />
              <button className="absolute bottom-5 left-14 px-6 py-1 rounded bg-white" onClick={()=> handleAdd({name:'vegPizza',price:149,rating:4.4})}>
                ADD
              </button>
            </div>
          </div>
        </div>
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="flex flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">Paneer Pizza</h1>
                <h3 className="text-[20px]">₹ 140</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.5</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
              onClick={handleOnclick}
            >
              <img src={img1} className="w-[150px]" />
              <Link className="fixed bottom-2 left-8 px-6 py-1 rounded bg-white">
                ADD
              </Link>
            </Link>
          </div>
        </div>
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="flex flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">Chicken Pizza</h1>
                <h3 className="text-[20px]">₹ 150</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.5</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
              onClick={handleOnclick}
            >
              <img src={chickenPizza} className="w-[180px] h-[160px]" />
              <Link className="absolute bottom-2 left-12 px-6 py-1 rounded bg-white">
                ADD
              </Link>
            </Link>
          </div>
        </div>
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="flex flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">Mutton Pizza</h1>
                <h3 className="text-[20px]">₹ 255</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.5</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
              onClick={handleOnclick}
            >
              <img src={muttonPizza} className="w-[180px] h-[140px]" />
              <Link className="absolute bottom-5 left-12 px-6 py-1 rounded bg-white">
                ADD
              </Link>
            </Link>
          </div>
        </div>
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="flex flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">Cheese Pizza</h1>
                <h3 className="text-[20px]">₹ 172</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.5</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
              onClick={handleOnclick}
            >
              <img src={cheesePizza} className="w-[150px]" />
              <Link className="absolute bottom-2 left-8 px-6 py-1 rounded bg-white">
                ADD
              </Link>
            </Link>
          </div>
        </div>
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="flex flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">Double Cheese Pizza</h1>
                <h3 className="text-[20px]">₹ 228</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.5</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
              onClick={handleOnclick}
            >
              <img src={img1} className="w-[150px]" />
              <Link className="absolute bottom-2 left-8 px-6 py-1 rounded bg-white">
                ADD
              </Link>
            </Link>
          </div>
        </div>
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="ml-[25px] tsm:flex tsm:flex-col w-[50%] ">
              <div>
                <h1 className="font-bold ">Mashroom Pizza</h1>
                <h3 className="text-[20px]">₹ 201</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.5</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
              onClick={handleOnclick}
            >
              <img src={masroomPizza} className="w-[150px] h-[150px]" />
              <Link className="absolute bottom-4 left-14 px-6 py-1 rounded bg-white">
                ADD
              </Link>
            </Link>
          </div>
        </div>
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="ml-[25px] tsm:flex tsm:flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">Mashroom Chicken Pizza</h1>
                <h3 className="text-[20px]">₹ 289</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.5</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
              onClick={handleOnclick}
            >
              <img src={img1} className="w-[150px]" />
              <Link className="absolute bottom-2 left-8 px-6 py-1 rounded bg-white">
                ADD
              </Link>
            </Link>
          </div>
        </div>
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="flex flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">Chicken Chesse Pizza</h1>
                <h3 className="text-[20px]">₹ 289</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.5</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
              onClick={handleOnclick}
            >
              <img src={img1} className="w-[150px]" />
              <Link className="absolute bottom-2 left-8 px-6 py-1 rounded bg-white">
                ADD
              </Link>
            </Link>
          </div>
        </div>
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="flex flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">Mutton Cheese Pizza</h1>
                <h3 className="text-[20px]">₹ 399</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.5</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
              onClick={handleOnclick}
            >
              <img src={img1} className="w-[150px]" />
              <Link className="absolute bottom-2 left-8 px-6 py-1 rounded bg-white">
                ADD
              </Link>
            </Link>
          </div>
        </div>
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="flex flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">Chicken Paneer Pizza</h1>
                <h3 className="text-[20px]">₹ 249</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.5</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
              onClick={handleOnclick}
            >
              <img src={img1} className="w-[150px]" />
              <Link className="absolute bottom-2 left-8 px-6 py-1 rounded bg-white">
                ADD
              </Link>
            </Link>
          </div>
        </div>
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="flex flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">Tomato Pizza</h1>
                <h3 className="text-[20px]">₹ 99</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.5</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
              onClick={handleOnclick}
            >
              <img src={tomatoPizza} className="w-[150px]" />
              <Link className="absolute bottom-2 left-8 px-6 py-1 rounded bg-white">
                ADD
              </Link>
            </Link>
          </div>
        </div>
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="flex flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">Onion Pizza</h1>
                <h3 className="text-[20px]">₹ 99</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.5</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
              onClick={handleOnclick}
            >
              <img src={onionPizza} className="w-[150px]" />
              <Link className="absolute bottom-2 left-8 px-6 py-1 rounded bg-white">
                ADD
              </Link>
            </Link>
          </div>
        </div>
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className=" ml-[25px] tsm:flex tsm:flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">Capcicum Pizza</h1>
                <h3 className="text-[20px]">₹ 99</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.5</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
              onClick={handleOnclick}
            >
              <img src={capcicumPizza} className="w-[150px]" />
              <Link className="absolute bottom-2 left-8 px-6 py-1 rounded bg-white">
                ADD
              </Link>
            </Link>
          </div>
        </div>
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="flex flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">Lesbo Pizza</h1>
                <h3 className="text-[20px]">₹ 199</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.5</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
              onClick={handleOnclick}
            >
              <img src={img1} className="w-[150px]" />
              <Link className="absolute bottom-2 left-8 px-6 py-1 rounded bg-white">
                ADD
              </Link>
            </Link>
          </div>
        </div>
        <div className="w-full items-center justify-center flex bg-gray-100 rounded mt-5 p-10">
          <div className="flex justify-evenly">
            <div className="flex flex-col w-[50%]">
              <div>
                <h1 className="font-bold ">Fried Pizza</h1>
                <h3 className="text-[20px]">₹ 109</h3>
              </div>
              <div className="flex gap-2 mt-4">
                <FcRating className="w-5 h-5 rounded-full" /> <p>4.5</p>
              </div>
              <p className="w-[80%] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                amet voluptas vero a vel, nulla impedit rem debitis voluptatum
                facilis. Quas consequuntur libero sit ducimus inventore
                laboriosam quaerat unde aut.
              </p>
            </div>

            <Link
              className="w-[200px] items-center flex relative"
              onClick={handleOnclick}
            >
              <img src={img1} className="w-[150px]" />
              <Link className="absolute bottom-2 left-8 px-6 py-1 rounded bg-white">
                ADD
              </Link>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
