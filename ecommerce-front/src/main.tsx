import { createRoot } from "react-dom/client";
import AppRouter from "@routes/AppRouter";
import "@styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@store/index";
//axios
import "./services/axios-global.js"
// Start the app and make the Redux store available to all components.
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>,
);
