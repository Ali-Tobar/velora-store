import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetWishlist,
  cleanWishlistProductsFullInfo,
} from "@store/wishlist/wishlistSlice";

const useWishlist = () => {
  const dispatch = useAppDispatch();
  const { loading, error, productsFullInfo } = useAppSelector(
    (state) => state.wishlist,
  );
  const cartItems = useAppSelector((state) => state.cart.items);

  // Load wishlist products when the page opens and clear them when it closes.
  useEffect(() => {
    const promise = dispatch(actGetWishlist());
    return () => {
      dispatch(cleanWishlistProductsFullInfo());
      promise.abort();
    };
  }, [dispatch]);

  // Add each product's cart quantity and wishlist status for the product card.
  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked: true,
  }));
  return { loading, error, records };
};

export default useWishlist;
