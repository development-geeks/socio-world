import { lazy } from "react";
import Loadable from "./Loadable";
import MinimalLayout from "src/layout/MinimalLayout";

const LoginPage = Loadable(lazy(() => import("src/modules/authentication/LoginPage")));
const RegisterPage = Loadable(lazy(() => import("src/modules/authentication/RegisterPage")));
const ResetPasswordPage = Loadable(
  lazy(() => import("src/modules/authentication/ResetPasswordPage"))
);

const PageNotFound = Loadable(lazy(() => import("src/components/PageNotFound")));
const AuthenticationRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
    {
      path: "reset-password",
      element: <ResetPasswordPage />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ],
};

export default AuthenticationRoutes;
