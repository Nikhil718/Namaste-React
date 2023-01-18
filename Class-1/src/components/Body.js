import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// function to filter the data based on search data
function filterData(searchText, restaurant) {
  const filteredData = restaurant.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getAllRestaurants();
  }, []);

  // getting all restaurants by api call

  async function getAllRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setFilteredRes(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  if (!allRestaurants) return null;

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            {
              console.log(data);
            }
            setFilteredRes(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-card">
        {filteredRes.length == 0 ? (
          <h3>No match found for "{searchText}". Try different restaurant.</h3>
        ) : (
          filteredRes.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />{" "}
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
