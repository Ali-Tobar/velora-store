export type TProduct = {
  id: number;
  title: string;
  price: string;
  cat_prefix?: string;     // Links the product to its category.
  img: string;
};
