import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import type { TCategory, TLoading } from "@customTypes/index";
import { isString } from "@customTypes/index";

interface ICategoriesState {
  // The categories shown in the store.
  records: TCategory[];
  // The current status of the categories request.
  loading: TLoading;
  // The error message, if the request fails.
  error: string | null;
}

// Start with an empty list and no request in progress.
const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

// Keep the categories and request status in one place.
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Clear old errors while the request is running.
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    // Save the categories when the request succeeds.
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    // Save the error when the request fails.
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";

      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});
export { actGetCategories };
export default categoriesSlice.reducer;
