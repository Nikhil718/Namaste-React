import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CARD_IMG_URL } from "../config";
import useRestaurant from "./shared/useRestaurant";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const restaurantData = useRestaurant(restaurantId);

  return !restaurantData ? (
    <h3>Loding Details.....</h3>
  ) : (
    <div className="flex py-5">
      <div>
        <h1 className="font-bold text-2xl">{restaurantData.name}</h1>
        <img src={CARD_IMG_URL + restaurantData.cloudinaryImageId} />
        <h3>{restaurantData.area}</h3>
        <h2>{restaurantData.city}</h2>
        <h3>{restaurantData.costForTwoMsg}</h3>
        <h3>{restaurantData.avgRatingString} Stars</h3>
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold underline">Menu</h2>
        <ul>
          {Object.values(restaurantData?.menu?.items).map((item) => (
            <li key={item.id}>{item?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
