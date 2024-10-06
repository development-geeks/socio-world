import { lazy } from "react";
import Loadable from "./Loadable";
import MinimalLayout from "../layout/MinimalLayout";

const LoginPage = Loadable(lazy(() => import("../modules/authentication/LoginPage")));
const SignupPage = Loadable(lazy(() => import("../modules/authentication/SignupPage")));
const ResetPasswordPage = Loadable(
  lazy(() => import("../modules/authentication/ResetPasswordPage"))
);

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
      path: "signup",
      element: <SignupPage />,
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
