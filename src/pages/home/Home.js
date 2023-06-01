import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

//
export default function () {
  //
  return (
    <div className="home-container">
      <h1>Welcome to E-commerce Website</h1>
      <Link to={"/products"}>Explore Products 🛒</Link>
    </div>
  );
}
