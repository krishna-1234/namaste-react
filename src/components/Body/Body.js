import  ResCard  from "../ResCard/ResCard";
import  { useEffect, useState } from 'react';
import Shimmer from "../Shimmer/Shimmer";
const Body = () => {
  const [listOfRes, setListofRes] = useState([]);
  const [inputVal, setinputVal] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    console.log("use effect called");
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.33990&lng=74.64500&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    //optional chaining
    setListofRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    console.log('json', json);
  }

 
  return  listOfRes.length === 0 ?  <Shimmer/> :
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="serach-box" value={inputVal} onChange={(e) => setinputVal(e?.target?.value)}></input>

          <button onClick={() => {
            //Filter the cards and update the UI
            const filteredRes = listOfRes.filter((res) => res?.info?.name?.toLowerCase().includes(inputVal.toLowerCase()));
            setFilteredRes(filteredRes);
          }}>Search</button>

        </div>
        <button className="filter-btn" onClick={() => 
          {
            //filter logic
            const filteredList = resList.filter((res) => 
              res.info.avgRating > 4);
            console.log('setListofRes', filteredList);
            
            setFilteredRes(filteredList);
          }
        }>Top rated</button>
      </div>
      <div className="res-container">
        {filteredRes?.map((res) => (
          <ResCard key={res?.info?.id} resData={res?.info} />
        ))}
      </div>
    </div>
      
  
};
export default Body;