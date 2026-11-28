export type TProduct = {
  id: number;
  title: string;
  price: number;
  cat_prefix?: string; // Links the product to its category.
  img: string;
  quantity?: number;
  max: number;
  isLiked?: boolean;
};
