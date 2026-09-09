import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [login, setLogin] = useState("login");


  return (
    <div className="Header">
      <div className="logo">
        <img src="/logo.png" />
      </div>
      <ul className="nav-items">
        <li><Link to="/">Home</Link></li>
        <li><Link to ="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>Cart</li>
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
