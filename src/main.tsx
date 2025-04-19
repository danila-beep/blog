import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store/index.ts";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";

import "./firebaseConfig.ts";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>
);
