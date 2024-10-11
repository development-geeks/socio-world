import { Outlet } from "react-router-dom";

const MinimalLayout = () => {
  return (
    <div className="bg-[#eff2f6] min-h-screen flex flex-col">
      <Outlet />
    </div>
  );
};

export default MinimalLayout;
