import React, { useEffect, useState } from "react";
import "./Products.css";
import Card from "../../components/card/Card";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { productSelector, sortProdctsByPrice } from "../../redux/products";

//
export default function Products({ loading, err }) {
  //
  const dispatch = useDispatch();

  //
  const { products, isSorted } = useSelector(productSelector);

  // handle click
  const handleClick = () => {
    dispatch(sortProdctsByPrice());
  };

  // loading ?
  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading please wait...</h1>;
  }

  // err ?
  if (err) {
    return <h2 style={{ textAlign: "center" }}>Something went wrong!</h2>;
  }
  //
  return (
    <div className="main-container">
      <div className="sort">
        <div className="btn-sort" onClick={handleClick}>
          {isSorted ? "❌" : "sort by price"}
        </div>
      </div>
      <div className="products">
        {products.map((product, index) => (
          <Card key={product.id} item={product} index={index} />
        ))}
      </div>
    </div>
  );
}
