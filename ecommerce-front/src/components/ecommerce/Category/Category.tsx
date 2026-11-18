import { Link } from "react-router-dom";
import type { TCategory } from "@customTypes/category";
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle, categoryLink } = styles;



const Category = ({ title, img, prefix }: TCategory) => {
  return (
    <Link className={categoryLink} to={`/products/${prefix}`}>
      <div className={category}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
        <h4 className={categoryTitle}>{title}</h4>
      </div>
    </Link>
  );
};

export default Category;
