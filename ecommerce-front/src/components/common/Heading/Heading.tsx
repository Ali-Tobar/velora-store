import type { ReactNode } from "react";
import styles from "./styles.module.css";

const Heading = ({ children }: { children: ReactNode }) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

export default Heading;
