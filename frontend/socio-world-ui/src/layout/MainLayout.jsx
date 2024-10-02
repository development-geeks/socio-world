import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div>Main Layout</div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
