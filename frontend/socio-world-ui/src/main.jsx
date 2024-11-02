import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { ToastProvider } from "./context/ToastContext.jsx";
import { RouterProvider } from "react-router-dom";
import { createRoutes } from "./routes";
import { Toaster } from "react-hot-toast";

const routes = createRoutes();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <Toaster position="top-right" />
      <RouterProvider router={routes}></RouterProvider>
    </ToastProvider>
  </StrictMode>
);
