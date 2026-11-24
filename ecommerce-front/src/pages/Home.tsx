import { Link } from "react-router-dom";
import styles from "./Home.module.css";

// This is the store's home page.
const Home = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <span className={styles.heroBadge}>New Collection 2026</span>
        <h1 className={styles.heroTitle}>
          Curated Modern Fashion for Every Season
        </h1>
        <p className={styles.heroSubtitle}>
          Discover timeless silhouettes, premium textiles, and everyday essentials
          designed for modern living.
        </p>
        <Link to="/Categories" className={styles.heroBtn}>
          Explore Categories
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Home;
