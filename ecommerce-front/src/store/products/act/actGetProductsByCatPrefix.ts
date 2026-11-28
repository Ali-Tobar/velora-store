import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utilities/index";
import type { TProduct } from "@customTypes/product.types";

type TResponse = TProduct[];

const actGetProductsByCatPrefix = createAsyncThunk<
  TResponse, // Data returned when the request succeeds.                          (Returned)
  string, // Category prefix passed to the thunk.                                 (type argument to sent )
  { rejectValue: string } // Error value returned when the request fails.         (ThunkApiConfig)
>("products/actGetProductsByCatPrefix", async (prefix, thunkAPI) => {
  const { rejectWithValue, signal } = thunkAPI;
  try {
    // Load products that belong to the selected category.
    const response = await axios.get<TResponse>(
      `/products?cat_prefix=${prefix}`,
      {
        // Let Axios cancel the request if this thunk is aborted.
        signal,
      },
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
});

export default actGetProductsByCatPrefix;
