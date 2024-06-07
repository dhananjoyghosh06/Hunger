import React, { useEffect } from 'react';
import { FcRating } from "react-icons/fc";

const TopRatedRes = ({resturantList}) => {
  useEffect(()=>{
      console.log("hi", resturantList);
  },[])
  return (
    <div>
      <div>
        {resturantList?.map((data) => {
          return (
            <div key={data.id} className="max-w-[300px] overflow-hidden m-4">
              <img
                className="w-65 h-44 rounded-2xl"
                src=""
                alt="Restaurant"
              />
              <div className="px-4 py-4">
                <div className="font-bold text-xl text-gray-800">
                  {data?.name}
                </div>
                <div className="flex items-center">
                  <FcRating className="w-5 h-5 rounded-full" />
                  <div className="font-bold text-xl text-gray-800 ml-1">
                    {data?.rating || "No rating"}
                  </div>
                </div>
                <p className="text-gray-500 text-base">
                  {data?.cuisine ? data.cuisine.join(", ") : "No cuisine data"}
                </p>
                <p className="text-gray-500 text-base">
                  {data?.address_obj ? data.address_obj.city : "No city data"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRatedRes;
