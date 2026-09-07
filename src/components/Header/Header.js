import { useState } from "react";

export const Header = () => {
  const [login, setLogin] = useState("login")
  return (
    <div className="Header">
      <div className="logo">
        <img src="/logo.png" />
      </div>
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
        <button className="login" onClick={() => 
          login === "Login" ? setLogin("Logout") : setLogin("Login")
        }>{login}</button>
      </ul>
    </div>
  );
};