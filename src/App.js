import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { ToastContainer } from "react-toastify";
import Products from "./pages/products/Products";
import AddProduct from "./pages/addproduct/AddProduct";
import { useDispatch } from "react-redux";
import { getInitialProducts } from "./redux/products";
import { toast } from "react-toastify";
import axios from "./axios";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import About from "./pages/productInfo/About";

//
function App() {
  //
  const dispatch = useDispatch();

  //
  const [loading, setLoading] = useState({
    err: false,
    loading: false,
  });
  //
  useEffect(() => {
    setLoading({
      err: false,
      loading: true,
    });
    axios
      .get("/")
      .then((res) => {
        const { data } = res;
        setLoading({
          err: false,
          loading: false,
        });
        dispatch(getInitialProducts({ data }));
      })
      .catch((err) => {
        setLoading({
          err: true,
          loading: false,
        });
        toast.error("Connection  error", { autoClose: 3000 });
      });
  }, []);

  //
  return (
    <div className="App">
      <Nav />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products loading={loading.loading} err={loading.err} />}
        />
        <Route path="/product-info" element={<About />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
