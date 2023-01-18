import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CARD_IMG_URL } from "../config";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=" +
        restaurantId
    );
    const json = await data.json();
    console.log(json);
    setRestaurantData(json.data);
  }

  return !restaurantData ? (
    <h3>Loding Details.....</h3>
  ) : (
    <div className="restaurant-details">
      <div>
        <h1>{restaurantId}</h1>
        <h2>{restaurantData.name}</h2>
        <img src={CARD_IMG_URL + restaurantData.cloudinaryImageId} />
        <h3>{restaurantData.area}</h3>
        <h2>{restaurantData.city}</h2>
        <h3>{restaurantData.costForTwoMsg}</h3>
        <h3>{restaurantData.avgRatingString} Stars</h3>
      </div>
      <div className="menu-items">
        <h2>Menu</h2>
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
