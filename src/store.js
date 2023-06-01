import { configureStore } from "@reduxjs/toolkit";

import { productReducer } from "./redux/products";
import { alertReducer } from "./redux/alert";

const store = configureStore({
  reducer: {
    productReducer,
    alertReducer,
  },
});

export default store;
