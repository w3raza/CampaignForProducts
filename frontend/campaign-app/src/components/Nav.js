import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <h3>Campaign for products</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/product">
          <li>Products</li>
        </Link>
        <Link style={navStyle} to="/campaign">
          <li>Campaigns</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
