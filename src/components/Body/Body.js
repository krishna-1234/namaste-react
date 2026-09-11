import ResCard from "../ResCard/ResCard";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListofRes] = useState([]);
  const [inputVal, setinputVal] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.33990&lng=74.64500&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    //optional chaining
    setListofRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>
        Looks like you're offline!!. Please check your internet connection...
      </h1>
    );
  }
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={inputVal}
            onChange={(e) => setinputVal(e?.target?.value)}
          ></input>

          <button
            className="px-4 bg-green-100 my-4 py-1 rounded-lg"
            onClick={() => {
              //Filter the cards and update the UI
              const filteredRes = listOfRes.filter((res) =>
                res?.info?.name?.toLowerCase().includes(inputVal.toLowerCase()),
              );
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-100"
            onClick={() => {
              //filter logic
              const filteredList = resList.filter(
                (res) => res.info.avgRating > 4,
              );
              console.log("setListofRes", filteredList);

              setFilteredRes(filteredList);
            }}
          >
            Top rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes?.map((res) => (
          <Link key={res?.info?.id} to={"/restaurants/" + res.info.id}>
            <ResCard resData={res?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
