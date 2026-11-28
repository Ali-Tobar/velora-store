import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utilities/index";
import type { TCategory } from "@customTypes/category.types";

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      // Load the category list from the local API. and (signal) Let Axios cancel the request if this thunk is aborted.
      const response = await axios.get<TResponse>("/categories", { signal });
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  },
);

export default actGetCategories;
