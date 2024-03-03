import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import ResCategories from "./ResCategories";

const RestrauntMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestrauntMenu(resId);
  console.log(resInfo);

  if (resInfo == null) return <Shimmer />;

  const restaurantName = resInfo?.cards?.[0]?.card?.card?.info || "No Name";
  const resInfoCard =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const categories = resInfoCard.filter(
    (C) =>
      C?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log("Your Data is : ")
  // console.log(categories);
  // console.log(categories[0].card.card.title);

  return (
    <div>
      <div className="bg-gray-100 w-[900px] m-auto p-5 shadow-lg mt-8 rounded-xl">
        <h1 className="font-bold text-xl">{restaurantName.name}</h1>
        <h3 className="flex justify-between border-b-2 border-gray-400 p-5">
          <ul>
            <li>
              {restaurantName.cuisines[0]},{restaurantName.cuisines[1]}
            </li>
            <li>{restaurantName.areaName}</li>
            <li>{restaurantName.feeDetails.message}</li>
          </ul>
          <ul>
            <li>{restaurantName.avgRating} ⭐</li>
          </ul>
        </h3>
        <div>
          {categories.map((categorie) => {
            return (
              <ResCategories
                data={categorie?.card?.card}
                key={categorie?.card?.card.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestrauntMenu;
