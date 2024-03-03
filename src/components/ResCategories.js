// import React from "react";
import { useState } from "react";
import constant from "../utils/constant";
import CardsItems from "./CardsItems";

const ResCategories = (data) => {
//   console.log("Data is : ");
  console.log(data);

const [showItems,setShowItems] = useState(false);

const HandelClick = ()=>{
    setShowItems(!showItems);

}
  return (
    <>
      <div className="border-b-2 border-gray-300 p-5">
        <div className="font-bold text-lg flex justify-between cursor-pointer" onClick={HandelClick}>
          <h1>
            {data?.data?.title}({data?.data?.itemCards.length})
          </h1>
          {/* 🔽 : 🔼 */}
          <h1>🔽</h1>
        </div>
        <div>
           {/* {showItems && data?.data?.itemCards.map((val) => {
            return (
              <div className="p-5 bg-slate-200 m-5 shadow-lg rounded-md flex justify-between gap-6">
                <div className="w-[500px]">
                  <h2 className="font-bold text-base">{val.card.info.name}</h2>
                  <h3>
                    Rs-
                    {val.card.info.price
                      ? val.card.info.price / 100
                      : val.card.info.defaultPrice / 100}
                  </h3>
                  <p>{val.card.info.description}</p>
                </div>
                <div >
                    <img src={constant.CDN_URL + val.card.info.imageId } className="w-[150px] h-[100px] rounded-lg" alt="Loading.." />
                    <button className="bg-black text-white w-14 border border-black rounded-lg">Add +</button>
                </div>
              </div>
            );
          })} */}
          <div>
            {showItems && <CardsItems items = {data?.data?.itemCards} key = {data?.data?.name}/>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResCategories;
