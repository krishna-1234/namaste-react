import { useEffect, useState } from "react";
import Shimmer from "./Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useResaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const { resInfo } = useResaurantMenu();


  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo.name}</h1>

      <h2>{resInfo.cuisines.join(", ")}</h2>

      <h3>{resInfo.costForTwo}</h3>

      <h2>Menu</h2>

      <ul>
        {resInfo.menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;