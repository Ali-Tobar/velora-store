import { memo, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import type { TProduct } from "@customTypes/product";
import styles from "./styles.module.css";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";

const { product, productImg, maximumNotice, addToCartBtn } = styles;

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
          ? "Maximum limit reached"
          : `You can add ${currentRemainingQuantity} more`}
      </p>
      <Button
        className={addToCartBtn}
        onClick={handleAddToCart}
        disabled={isBtnDisabled || quantityReachedToMax}
      >
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" />
            Adding...
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
});

export default Product;
