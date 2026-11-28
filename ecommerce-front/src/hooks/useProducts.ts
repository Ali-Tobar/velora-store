import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  cleanUpProductsRecords,
} from "@store/products/productsSlice";

const useProducts = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const cartItem = useAppSelector((state) => state.cart.items);
  const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsId);
  const productFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItem[el.id] || 0,
    isLiked: wishlistItemsId.includes(el.id),
  }));
  useEffect(() => {
    // Fetch products when the category in the URL changes.
    if (!prefix) return;
    // Keep the request handle so it can be aborted during cleanup.
    const promise = dispatch(actGetProductsByCatPrefix(prefix));

    return () => {
      // Clear products so they do not stay on the next page.
      dispatch(cleanUpProductsRecords());
      promise.abort(); // Request Cancellation
    };
  }, [dispatch, prefix]);
  return { loading, error, productFullInfo, prefix };
};

export default useProducts;
