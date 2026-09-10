import { useState, useState } from "react";


const useResaurantMenu = () => {
const [resInfo, setResInfo] = useState([]);
    
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
    return resInfo;
}

export default useResaurantMenu;