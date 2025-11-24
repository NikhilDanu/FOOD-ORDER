import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import "./Navbar.css";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="site-nav">
      <div className="nav-inner">

        {/* LEFT - BRAND */}
        <div className="nav-left">
          <h2 className="brand">FoodOrder</h2>
        </div>

        {/* CENTER LINKS */}
        <div className="nav-center">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* RIGHT ICONS */}
        <div className="nav-right">

          {/* SEARCH BAR */}
          <div className="search-box">
            <input type="text" placeholder="Search food..." />
            <span className="search-icon">🔍</span>
          </div>

          {/* USER ICON */}
          <div className="user-icon">👤</div>

          {/* CART ICON */}
          <Link to="/cart" className="cart-icon">
            🛒 <span className="cart-count">{cart.length}</span>
          </Link>
        </div>

      </div>
    </nav>
  );
}
