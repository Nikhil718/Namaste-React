import { CARD_IMG_URL } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  deliveryTime,
  costForTwoString,
}) => {
  return (
    <div className="card">
      <img alt="image" src={CARD_IMG_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{deliveryTime} mins</h4>
      <h3>{costForTwoString}</h3>
    </div>
  );
};
export default RestaurantCard;
