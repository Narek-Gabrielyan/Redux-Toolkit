import { configureStore } from "@reduxjs/toolkit";
import products_slice from "./Slices/products_slice";

const store = configureStore({
  reducer: {
    products: products_slice,
  },
});
export default store;