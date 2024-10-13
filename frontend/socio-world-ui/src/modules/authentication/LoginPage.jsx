import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./forms/LoginForm";
import { API_URL } from "src/utils/constants";
import axios from "axios";
import { useToast } from "src/hooks/useToast";
const LoginPage = () => {
  const navigate = useNavigate();
  const { showSuccess } = useToast();

  const handleLoginFormSubmit = async (formValues) => {
    try {
      const res = await axios.post(
        `${API_URL}/api/v1/auth/login`,
        {
          username: formValues.username,
          password: formValues.password,
          rememberMe: formValues.rememberMe,
        },
        { withCredentials: "true" }
      );
      localStorage.setItem("access_token", res.data.access_token);
      showSuccess("Signed in successfully...");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 2xl:w-4/12 px-4 flex items-center">
        <div className="bg-white rounded-xl p-10 w-full">
          <div className="text-center">
            <h1 className="mb-2">Sign in</h1>
            <span className="text-sw-gray text-sw-medium">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-sw-primary text-sw-medium">
                Click here to sign up
              </Link>
            </span>
          </div>
          <div className="mt-4">
            <LoginForm handleLoginFormSubmit={handleLoginFormSubmit}></LoginForm>
          </div>

          <p className="mb-0 mt-4 text-sw-medium text-center text-sw-gray">
            &copy; 2024 Socio World
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
