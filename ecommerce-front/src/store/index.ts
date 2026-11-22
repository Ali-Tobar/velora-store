import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/es/storage";
import categoriesReducer from "@store/categories/categoriesSlice";
import productsReducer from "@store/products/productsSlice";
import cartReducer from "./cart/cartSlice";

// Save only the cart items between visits.
const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

// Keep each part of the app under its own store key.
const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
});

// Combine the store sections used by the app.
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // redux-persist actions include values that are not serializable.
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Get these types from the store so they stay up to date.
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export { store };

// Start saving and restoring the cart.
export const persistor = persistStore(store);
