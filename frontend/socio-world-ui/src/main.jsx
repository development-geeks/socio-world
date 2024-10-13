import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createRoutes } from "./routes/index.js";
import { RouterProvider } from "react-router-dom";
import { ToastProvider } from "./context/ToastContext.jsx";

const routes = createRoutes();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <RouterProvider router={routes}></RouterProvider>
    </ToastProvider>
  </StrictMode>
);
