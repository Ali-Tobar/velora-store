import styles from "./styles.module.css";
const { footerContainer, footerContent, copyright } = styles;

const Footer = () => {
  return (
    <footer className={footerContainer}>
      <div className={footerContent}>
        <p className={copyright}>© 2026 Velora. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
