import Logo from "@assets/svg/cart.svg?react";

import styles from "./styles.module.css";
const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  // Show the basket icon and the current item count.
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>0</div>
    </div>
  );
};

export default HeaderBasket;