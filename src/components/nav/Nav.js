import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { productSelector } from "../../redux/products";

//logo
const cart_logo =
  "data:image/png;base64,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";

//
export default function Nav() {
  // selector
  const { cart } = useSelector(productSelector);

  //
  return (
    <ul className="nav-bar">
      <li className="nav-item">
        <Link to={"/"}>
          <span className="nav-brand">eCommerce</span>
        </Link>
      </li>
      <li className="nav-item item-1">
        <Link to={"/products"}>
          <span className="nav-item-title">Products</span>
        </Link>
      </li>
      <li className="nav-item item-2">
        <Link to={"/addProduct"}>
          <span className="nav-item-title">Add Product</span>
          <img
            src="https://img.icons8.com/?size=512&id=102544&format=png"
            width={25}
            height={25}
            alt=""
          />
        </Link>
      </li>

      <li className="nav-item item-3 logo-cart">
        <Link to={"/cart"} onClick={() => ""}>
          <span className="total-cart-items">{cart.length}</span>
          <img className="list-item-logo " src={cart_logo} alt="Cart" />
          Cart
        </Link>
      </li>

      <li className="nav-item item-4 profile">
        <span className="profile-name">john Doe</span>
        <img
          src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png"
          alt="profile"
          className="profile-img"
        />
      </li>
    </ul>
  );
}
