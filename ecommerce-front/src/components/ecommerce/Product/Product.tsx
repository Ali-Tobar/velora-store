import { memo, useEffect, useState } from "react";

import { Button, Spinner } from "react-bootstrap";
import type { TProduct } from "@customTypes/product";
import styles from "./styles.module.css";
const { product, productImg, maximumNotice } = styles;
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
// Avoid rendering this product again when its props have not changed.
const Product = memo(({ id, title, price, img, max, quantity }: TProduct) => {
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  // Show how many more items can be added.
  const currentRemainingQuantity = max - (quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

  // Enable the button again shortly after an item is added.
  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }

    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  // Add this product to the cart and briefly disable the button.
  const handleAddToCart = () => {
    dispatch(addToCart(id));
    setIsBtnDisabled(true);
  };
  // Show the product details and its add-to-cart button.
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price.toFixed(2)} EGP</h3>
      <p className={maximumNotice}>
        {quantityReachedToMax
          ? "You reach to the limit"
          : `You can add ${currentRemainingQuantity} item(s)`}
      </p>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={handleAddToCart}
        disabled={isBtnDisabled || quantityReachedToMax}
      >
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" />
            Loading...
          </>
        ) : (
          " Add to cart"
        )}
      </Button>
    </div>
  );
});

export default Product;
