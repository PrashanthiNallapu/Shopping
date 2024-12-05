import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./cartContext";
import "./Header.css";


const Header = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <header className="header">
      <h1 className="logo" onClick={() => navigate("/")}>
        Shopping App
      </h1>
      <div className="cart-icon-container">
        <button onClick={() => navigate("/cart")} className="cart-button">
          <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="Cart" className="cart-icon" />
          <span className="cart-count">{cart.length}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
