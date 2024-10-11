import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#eff2f6] flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
