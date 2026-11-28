import { useEffect, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByItems,
  cartItemChangeQuantity,
  cartItemRemove,
  cleanCartProductsFullInfo,
} from "@store/cart/cartSlice";
const useCart = () => {
  const dispatch = useAppDispatch();
  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart,
  );

  // Load the product details for the items that are currently in the cart and clean cart products information .
  useEffect(() => {
    const promise = dispatch(actGetProductsByItems());
    return () => {
      dispatch(cleanCartProductsFullInfo());
      promise.abort();
    };
  }, [dispatch]);

  // Add the selected quantity to each product before showing it on the page.
  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  // Update the quantity in the cart when the user changes it.
  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch],
  );

  // Remove a product and update the cart state.
  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch],
  );
  return { loading, error, products, changeQuantityHandler, removeItemHandler };
};

export default useCart;
