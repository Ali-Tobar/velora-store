import { createRoot } from "react-dom/client";
import AppRouter from "@routes/AppRouter";
import "@styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import Store from "@store/index";

// Start the app and make the Redux store available to all components.
createRoot(document.getElementById("root")!).render(
  <Provider store={Store}>
    <AppRouter />
  </Provider>,
);
