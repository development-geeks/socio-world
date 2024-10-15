import { useRoutes } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import AuthenticationRoutes from "./AuthenticationRoutes";

const Routes = () => {
  return useRoutes([MainRoutes, AuthenticationRoutes]);
};

export default Routes;
