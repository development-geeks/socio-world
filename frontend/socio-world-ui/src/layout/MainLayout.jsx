import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { getRequest } from "src/utils/request";

const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        const decodedData = jwtDecode(accessToken);
        const userId = decodedData.userId;
        await getRequest(`/api/v1/users/${userId}`);
      } else {
        navigate("/login");
      }
    };
    fetchData();
  }, []);

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
