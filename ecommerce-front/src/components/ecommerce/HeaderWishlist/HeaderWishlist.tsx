import Wishlist from "@assets/svg/wishlist.svg?react";
import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@store/hooks";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
const { container, iconWrapper, totalNum, pumpAnimate } = styles;

const HeaderWishlist = () => {
  const navigate = useNavigate();
  const [isAnimate, setIsAnimate] = useState(false);
  // Remember the first render so saved items do not animate on page load.
  const isFirstRender = useRef(true);
  const totalQuantity = useAppSelector(
    (state) => state.wishlist.itemsId.length,
  );
  const quantityStyle = `${totalNum} ${isAnimate ? pumpAnimate : ""}`;

  // Animate the wishlist count when it changes.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!totalQuantity) {
      return;
    }

    // Start the animation on the next browser frame.
    const animationFrame = requestAnimationFrame(() => setIsAnimate(true));
    const timeout = setTimeout(() => setIsAnimate(false), 300);

    return () => {
      // Cancel the scheduled update if the quantity changes or the component unmounts.
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeout);
    };
  }, [totalQuantity]);

  return (
    <div className={container} onClick={() => navigate("/wishlist")}>
      <div className={iconWrapper}>
        {totalQuantity > 0 && (
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
        <Wishlist />
      </div>
      <h3>Wishlist</h3>
    </div>
  );
};

export default HeaderWishlist;
