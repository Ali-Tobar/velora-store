import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TProduct } from "@customTypes/product";

type TResponse = TProduct[];

const actGetProductsByCatPrefix = createAsyncThunk<
  TResponse, // Data returned when the request succeeds.                          (Returned)
  string, // Category prefix passed to the thunk.                                 (type argument to sent )
  { rejectValue: string } // Error value returned when the request fails.         (ThunkApiConfig)
>("products/actGetProductsByCatPrefix", async (prefix, { rejectWithValue }) => {
  try {
    // Load products that belong to the selected category.
    const response = await axios.get<TResponse>(
      `http://localhost:5005/products?cat_prefix=${prefix}`,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {      // Type Guards
      return rejectWithValue(error.response?.data.message || error.message);     // axios Error
    } else {
      return rejectWithValue("An unexpected error");  //  Exception 
    }
  }
});

export default actGetProductsByCatPrefix;
