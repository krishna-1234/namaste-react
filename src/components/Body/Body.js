import  ResCard  from "../ResCard/ResCard";
import restList from "../../utils/mockData";
import  { useState } from 'react';
const Body = () => {
  const [resList, setResList] = useState(restList);

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => 
          {
            //filter logic
            const filteredList = resList.filter((res) => 
              res.info.avgRating > 4);
            console.log('setResList', filteredList);
            
            setResList(filteredList);
          }
        }>Top rated</button>
      </div>
      <div className="res-container">
        {resList?.map((res) => (
          <ResCard key={res?.info?.id} resData={res?.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;