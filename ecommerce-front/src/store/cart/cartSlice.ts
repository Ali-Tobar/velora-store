import type { TProduct } from "@customTypes/product";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface ICartState {
  // Store each product ID with its quantity.
  items: { [key: number]: number };
  // Keep the full details of the products in the cart.
  productsFullInfo: TProduct[];
}

// Start with an empty cart.
const initialState: ICartState = {
  items: {},
  productsFullInfo: [],
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
  },
});






export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
