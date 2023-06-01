import React from "react";
import "./About.css";
import { useSelector, useDispatch } from "react-redux";
import { productSelector, addToCart } from "../../redux/products";
// icons to represent rating insted of numbers format
const stars = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

//
export default function About() {
  // product selector
  const { productInfo } = useSelector(productSelector);

  //
  const dispatch = useDispatch();

  //
  return (
    <div className="about-product-container">
      <div className="product-info">
        <div className="product-img">
          <img
            src={productInfo.img || productInfo.images[0]}
            alt="image"
            height={280}
          />
        </div>
        <div className="about-product">
          <label htmlFor="">title</label>
          <div className="product-title">{productInfo.title}</div>
          <label htmlFor="">rating</label>
          <div className="product-rating">
            {stars[Math.round(productInfo.rating) - 1]}
          </div>
          <label htmlFor="">description</label>
          <div className="product-description">{productInfo.description}</div>
          <div className="btn">
            <button
              className="add"
              onClick={() =>
                dispatch(addToCart({ product: { ...productInfo } }))
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
