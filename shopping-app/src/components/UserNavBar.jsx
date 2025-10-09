import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/UserNavBar.css"; 

function UserNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    navigate("/user-login");
  };

  return (
    <nav className="user-navbar">
      <div className="nav-left">
        <h2 className="logo">sK Traders 🛒</h2>
      </div>

      <div className="nav-right">
        <Link to="/user-home" className="nav-link">Home</Link>
        <Link to="/user-home/products" className="nav-link">Products</Link>
        <Link to="/user-home/profile" className="nav-link">Profile</Link>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default UserNavBar;
