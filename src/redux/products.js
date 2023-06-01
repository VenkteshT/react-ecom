import { createSlice } from "@reduxjs/toolkit";

// initital state
const initialState = {
  initialProducts: [],
  products: [],
  cart: [],
  isSorted: false,
  productInfo: {},
};

// product slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // get initial state
    getInitialProducts(state, action) {
      const { data } = action.payload;
      state.products = [...data];
      state.initialProducts = [...state.products];
    },

    // add new product
    addProdcut(state, action) {
      const { data } = action.payload;
      let id = Date.now();
      let newProduct = {
        id,
        images: [data.img],
        ...data,
      };
      state.products = [...state.products, newProduct];
      state.initialProducts = [...state.products];
    },

    // delete product
    deleteProduct(state, action) {
      const { id } = action.payload;
      state.products = state.products.filter((el) => el.id !== id);
      state.initialProducts = [...state.products];
    },

    // edit a product
    editProduct(state, action) {
      const { id, content, index } = action.payload;
      let item = state.products[index];
      item = {
        ...item,
        ...content,
      };
      state.products[index] = { ...item };
      state.initialProducts = [...state.products];
    },

    // sort products by price
    sortProdctsByPrice(state, action) {
      if (!state.isSorted) {
        state.isSorted = true;
        state.products.sort((a, b) => a.price - b.price);
      } else {
        state.isSorted = false;
        state.products = [...state.initialProducts];
      }
    },

    // add product to cart
    addToCart(state, action) {
      const { product } = action.payload;
      state.cart = [{ ...product }, ...state.cart];
    },

    // remove from cart
    removeFromCart(state, action) {
      const { id } = action.payload;
      state.cart = state.cart.filter((el) => el.id !== id);
    },

    // get prodcut info and set it
    setProduct(state, action) {
      const { product } = action.payload;
      state.productInfo = { ...product };
    },
  },
});

const productActions = productSlice.actions;

// product selector
export const productSelector = (state) => state.productReducer;

// destructre actions
const {
  deleteProduct,
  addProdcut,
  editProduct,
  getInitialProducts,
  sortProdctsByPrice,
  addToCart,
  removeFromCart,
  setProduct,
} = productActions;

// export actions
export {
  addProdcut,
  deleteProduct,
  editProduct,
  getInitialProducts,
  productActions,
  sortProdctsByPrice,
  addToCart,
  removeFromCart,
  setProduct,
};

// export product reducer
export const productReducer = productSlice.reducer;
