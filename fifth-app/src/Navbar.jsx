// import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Cart icon
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <h2>ShopMate</h2>
      </div>

      {/* Navigation links */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      {/* Search bar */}
      <div className="search-cart">
        <input type="text" placeholder="Search products..." className="search-input"/>
        <FaShoppingCart className="cart-icon"/>
      </div>
    </nav>
  );
}

export default Navbar;
