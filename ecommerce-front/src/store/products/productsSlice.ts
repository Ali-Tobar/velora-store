import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import type { TLoading, TProduct } from "@customTypes/index";
import { isString } from "@customTypes/index";

interface IProductsState {
  // Products returned for the selected category.
  records: TProduct[];
  // The current status of the products request.
  loading: TLoading;
  // The error message, if the request fails.
  error: string | null;
}

// Start with no products and no request in progress.
const initialState: IProductsState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Remove old products when leaving the products page.
    cleanUpProductsRecords: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    // Clear old errors while the request is running.
    builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    // Save the products when the request succeeds.
    builder.addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    // Save the error when the request fails.
    builder.addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpProductsRecords } = productsSlice.actions;
export { actGetProductsByCatPrefix };
export default productsSlice.reducer;
