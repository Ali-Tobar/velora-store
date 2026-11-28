import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utilities/index";
const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (id: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      // Check whether this product is already in the user's wishlist.
      const isRecordExist = await axios.get(
        `/wishlist?userId=1&productId=${id}`,
      );

      // Remove the existing entry, or add it if it is not in the wishlist yet.      (Toggle pattern) important ya ali
      if (isRecordExist.data.length > 0) {
        await axios.delete(`/wishlist/${isRecordExist.data[0].id}`);
        return { type: "remove", id };
      } else {
        await axios.post("/wishlist", { userId: 1, productId: id });
        return { type: "add", id };
      }
      //Error Handling
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  },
);

export default actLikeToggle;
