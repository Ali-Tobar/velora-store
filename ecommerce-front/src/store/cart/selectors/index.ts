import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../index";

// Recalculate the total when the cart items change.
const getCartTotalQuantitySelector = createSelector(
  // Get the product quantities from the store.
  (state: RootState) => state.cart.items,
  (items) => {
    // Add up the quantity of every product.
    const totalQuantity = Object.values(items).reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0,
    );
    return totalQuantity;
  },
);

export { getCartTotalQuantitySelector };
