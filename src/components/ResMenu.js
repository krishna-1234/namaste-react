import { useEffect, useState } from "react";
import Shimmer from "./Shimmer/Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = () => {
    const mockData = {
      id: 1234,
      name: "KFC",
      cuisines: ["Burgers", "Fast Food", "Chicken"],
      costForTwo: "₹400 for two",
      menu: [
        "Chicken Burger",
        "Veg Burger",
        "Chicken Biryani",
        "French Fries",
        "Pepsi",
      ],
    };

    setResInfo(mockData);
  };

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