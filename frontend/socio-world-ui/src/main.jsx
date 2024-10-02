import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createRoutes } from "./routes/index.js";
import { RouterProvider } from "react-router-dom";

const routes = createRoutes();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>
);