import { lazy } from "react";
import Loadable from "./Loadable";
import MinimalLayout from "src/layout/MinimalLayout";

const LoginPage = Loadable(lazy(() => import("src/modules/authentication/LoginPage")));
const SignupPage = Loadable(lazy(() => import("src/modules/authentication/SignupPage")));
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
