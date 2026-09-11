import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [login, setLogin] = useState("login");


  return (
    <div className="flex justify-between shadow-lg">
      <div className="m-2 p-2 items-center">
        <img className="w-40" src="/logo.png" />
      </div>
      <ul className="flex p-4 m-4 items-center">
        <li className="px-4"><Link to="/">Home</Link></li>
        <li className="px-4"><Link to ="/about">About</Link></li>
        <li className="px-4"><Link to="/contact">Contact</Link></li>
        <li className="px-4"><Link to="/grocery">Grocery</Link></li>
        <li className="px-4">Cart</li>
        <button
          className="login"
          onClick={() =>
            login === "Login" ? setLogin("Logout") : setLogin("Login")
          }
        >
          {login}
        </button>
      </ul>
    </div>
  );
};
