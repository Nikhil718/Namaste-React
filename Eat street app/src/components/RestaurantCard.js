import { CARD_IMG_URL } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  deliveryTime,
  costForTwoString,
}) => {
  return (
    <div className="w-56 h-80 p-8 mx-7 shadow-lg hover:shadow-2xl">
      <img alt="image" src={CARD_IMG_URL + cloudinaryImageId}></img>
      <h2 className="font-bold">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{deliveryTime} mins</h4>
      <h3>{costForTwoString}</h3>
    </div>
  );
};
export default RestaurantCard;
