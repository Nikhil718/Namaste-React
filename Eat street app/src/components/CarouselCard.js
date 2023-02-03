import { CAROUSEL_URL } from "../config";

const CarouselCard = ({ creativeId }) => {
  return (
    <div className="">
      <img alt="image" src={CAROUSEL_URL + creativeId}></img>
    </div>
  );
};
export default CarouselCard;
