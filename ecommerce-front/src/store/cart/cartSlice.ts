import type { TLoading, TProduct } from "@customTypes/index";
import { isString } from "@customTypes/index";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByItems from "./act/actGetProductsByItems";
import {
  getCartTotalQuantitySelector,
  itemQuantityAvailabilityCheckingSelector,
} from "./selectors";
interface ICartState {
  // Store each product ID with its quantity.
  items: { [key: string]: number }; //  Index Signature  and  Normalized State
  // Keep the full details of the products in the cart.
  productsFullInfo: TProduct[];
  loading: TLoading;
  error: null | string;
}

// Start with an empty cart.
const initialState: ICartState = {
  items: {},
  productsFullInfo: [],
  loading: "idle",
  error: null,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Increase the quantity or add the product for the first time.
    addToCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    cartItemChangeQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) => {
      state.items[action.payload.id] = action.payload.quantity;
    },
    cartItemRemove: (state, action: PayloadAction<number>) => {
      delete state.items[action.payload];
      state.productsFullInfo = state.productsFullInfo.filter(
        (el) => el.id !== action.payload,
      );
    },
    cleanCartProductsFullInfo: (state) => {
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productsFullInfo = action.payload;
    });
    builder.addCase(actGetProductsByItems.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export {
  getCartTotalQuantitySelector,
  itemQuantityAvailabilityCheckingSelector,
  actGetProductsByItems,
};
export const {
  addToCart,
  cartItemChangeQuantity,
  cartItemRemove,
  cleanCartProductsFullInfo,
} = cartSlice.actions;
export default cartSlice.reducer;
