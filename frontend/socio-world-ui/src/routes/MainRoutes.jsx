import { lazy } from "react";
import Loadable from "./Loadable";
import MainLayout from "../layout/MainLayout";
const Dashboard = Loadable(lazy(() => import("../modules/dashboard/Dashboard")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <Dashboard />,
    },
  ],
};
export default MainRoutes;
