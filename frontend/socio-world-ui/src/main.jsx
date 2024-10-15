import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ToastProvider } from "./context/ToastContext.jsx";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </ToastProvider>
  </StrictMode>
);
