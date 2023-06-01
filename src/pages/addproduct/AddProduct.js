import React, { useState } from "react";
import "./AddProduct.css";
import { useDispatch } from "react-redux";
import { addProdcut } from "../../redux/products";
import { useNavigate } from "react-router-dom";

//
export default function AddProduct() {
  //
  const dispatch = useDispatch();
  //
  const navigate = useNavigate();
  //
  const [prodcutInof, setProductInof] = useState({
    title: "",
    price: "",
    description: "",
    rating: "",
    img: "",
  });

  //   handleChange
  function handleChange(e) {
    const { name, value } = e.target;
    setProductInof((p) => ({
      ...p,
      [name]: value,
    }));
  }

  //   handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch addProduct
    dispatch(addProdcut({ data: prodcutInof }));

    setProductInof({
      title: "",
      price: "",
      description: "",
      rating: "",
      img: "",
    });
    navigate("/products");
  };
  return (
    <div className="addproduct-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="collect-data">
          <label htmlFor="product-name">Product Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            id="product-name"
            required
            value={prodcutInof.title}
          />
        </div>

        <div className="collect-data">
          <label htmlFor="product-description">Description</label>
          <input
            onChange={handleChange}
            type="text"
            name="description"
            value={prodcutInof.description}
            id="product-description"
            required
          />
        </div>
        <div className="collect-data">
          <label htmlFor="product-rating">Rating</label>
          <input
            onChange={handleChange}
            type="text"
            name="rating"
            value={prodcutInof.rating}
            id="product-rating"
            required
          />
        </div>
        <div className="collect-data">
          <label htmlFor="product-price">Price </label>
          <input
            onChange={handleChange}
            type="text"
            name="price"
            value={prodcutInof.price}
            id="product-price"
            required
          />
        </div>
        <div className="collect-data">
          <label htmlFor="product-name">Product img url ?</label>
          <input
            onChange={handleChange}
            type="text"
            value={prodcutInof.img}
            name="img"
            id="product-name"
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
