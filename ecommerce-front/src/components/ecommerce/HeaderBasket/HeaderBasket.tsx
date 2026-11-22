import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";
import Logo from "@assets/svg/cart.svg?react";

import styles from "./styles.module.css";
const { basketContainer, basketQuantity, pumpCartQuantity, basketCart } =
  styles;

const HeaderBasket = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const isFirstRender = useRef(true);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const quantityStyle = `${basketQuantity} ${isAnimate ? pumpCartQuantity : ""}`;

  // Animate the count when its value changes.
  useEffect(() => {
    // Skip the animation when the saved cart first appears after refresh.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!totalQuantity) {
      return;
    }
    // Start the animation on the next browser frame.
    const animationFrame = requestAnimationFrame(() => setIsAnimate(true));
    // Remove the animation class after 300 milliseconds.
    const debounce = setTimeout(() => setIsAnimate(false), 300);

    // Cancel pending work if the quantity changes again or the component unmounts.
    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(debounce);
    };
  }, [totalQuantity]);

  // Show the basket icon and the current item count.
  return (
    <div className={basketContainer}>
      <div className={basketCart}>
        <Logo title="basket icon" />
        <div className={quantityStyle}>{totalQuantity}</div>
      </div>
      <h3>Cart</h3>
    </div>
  );
};

export default HeaderBasket;
