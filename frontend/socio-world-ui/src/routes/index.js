import { createBrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";

export const createRoutes = () => {
  return createBrowserRouter([MainRoutes, AuthenticationRoutes]);
};
