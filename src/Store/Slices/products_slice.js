import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetch_Products_CAT = createAsyncThunk(
    "fetch_Products_CAT",
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data
    }
)

const products_slice = createSlice({
  name: "products_slice",
  initialState: {
    products: [],
    isLoading: false,
  },
    extraReducers: (builder) => {
        builder.addCase(fetch_Products_CAT.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetch_Products_CAT.fulfilled, (state, action) => {
            state.isLoading = false,
            state.products = action.payload
        });
  }
});

export { fetch_Products_CAT };
export default products_slice.reducer