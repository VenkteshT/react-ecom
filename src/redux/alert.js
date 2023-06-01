import { createSlice } from "@reduxjs/toolkit";
import { productActions } from "./products";
import { toast } from "react-toastify";

const alertSlice = createSlice({
  name: "alert",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    // after updating item
    builder.addCase(productActions.editProduct, () => {
      toast.success("prodcut details updated", { autoClose: 1200 });
    });

    // after deleting product
    builder.addCase(productActions.deleteProduct, () => {
      toast.success("product removed successfully", { autoClose: 1100 });
    });

    // after addding new product
    builder.addCase(productActions.addProdcut, () => {
      toast.success("product added successfully", { autoClose: 1200 });
    });

    // after adding to cart
    builder.addCase(productActions.addToCart, () => {
      toast.success("added to Cart", { autoClose: 1200 });
    });

    // after removing from cart
    builder.addCase(productActions.removeFromCart, () => {
      toast.success("product removed from cart", { autoClose: 1100 });
    });
  },
});

const alertReducer = alertSlice.reducer;

export { alertReducer };
