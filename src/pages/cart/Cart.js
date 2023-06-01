import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { productSelector } from "../../redux/products";
import Card from "../../components/card/Card";
export default function Cart() {
  const { cart } = useSelector(productSelector);

  // if empty cart
  if (!cart.length) {
    return (
      <h1
        style={{
          textAlign: "center",
          marginTop: "10vh",
        }}
      >
        cart is empty!
      </h1>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-info">
        <span>Total: ₹ {cart.reduce((a, b) => a + b.price * 1, 0)}</span>
      </div>
      <div className="cart-items">
        {cart.map((cartItem) => (
          <Card item={cartItem} cart={true} />
        ))}
      </div>
    </div>
  );
}
