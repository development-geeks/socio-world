import { Link } from "react-router-dom";
import LoginForm from "./forms/LoginForm";
const LoginPage = () => {
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
            <LoginForm></LoginForm>
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
