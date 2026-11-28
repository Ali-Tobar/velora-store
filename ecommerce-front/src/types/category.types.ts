export type TCategory = {
  id?: number;
  title: string;
  // Used in the URL to find this category's products.
  prefix: string;
  img: string;
};
