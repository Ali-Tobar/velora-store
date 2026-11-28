import styles from "./styles.module.css";
import { memo } from "react";
const Heading = ({ title }: { title: string }) => {
  return <h2 className={styles.heading}>{title}</h2>;
};

export default memo(Heading); // Higher-Order Components (HOC):
