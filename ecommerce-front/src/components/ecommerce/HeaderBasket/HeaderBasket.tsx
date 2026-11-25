import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";
import Logo from "@assets/svg/cart.svg?react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
const { container, totalNum, pumpAnimate, iconWrapper } = styles;

const HeaderBasket = () => {
  const navigate = useNavigate();
  const [isAnimate, setIsAnimate] = useState(false);
  // Remember the first render so saved items do not animate on page load.
  const isFirstRender = useRef(true);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const quantityStyle = `${totalNum} ${isAnimate ? pumpAnimate : ""}`;

  // Animate the cart count when it changes.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!totalQuantity) return;

    // Start the animation on the next browser frame.
    const animationFrame = requestAnimationFrame(() => setIsAnimate(true));
    const timeout = setTimeout(() => setIsAnimate(false), 300);

    return () => {
      // Cancel the scheduled update if the quantity changes or the component unmounts.
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeout);
    };
  }, [totalQuantity]);

  // Go to the cart page.
  const handleRedirect = () => {
    navigate("/Cart");
  };

  // Show the basket icon and the current item count.
  return (
    <div className={container} onClick={handleRedirect}>
      <div className={iconWrapper}>
        <Logo title="basket icon" />
        {totalQuantity > 0 && (
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
      </div>
      <h3>Cart</h3>
    </div>
  );
};

export default HeaderBasket;
