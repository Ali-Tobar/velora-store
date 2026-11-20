import styles from "./styles.module.css";
const { footerContainer } = styles;

const Footer = () => {
  // Show the copyright text at the bottom of the layout.
  return (
    <footer className={footerContainer}>© 2026 Our Ecom. All rights reserved.</footer>
  );
};

export default Footer;