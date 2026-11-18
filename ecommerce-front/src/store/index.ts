import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "@store/categories/categoriesSlice";
import productsReducer from "@store/products/productsSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
