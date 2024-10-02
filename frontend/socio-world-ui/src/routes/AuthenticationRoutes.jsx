import { lazy } from "react";
import Loadable from "./Loadable";
import MinimalLayout from "../layout/MinimalLayout";

const LoginPage = Loadable(lazy(() => import("../modules/login/LoginPage")));
const PageNotFound = Loadable(lazy(() => import("../components/PageNotFound")));
const AuthenticationRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ],
};

export default AuthenticationRoutes;
