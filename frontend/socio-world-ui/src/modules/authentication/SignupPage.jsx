import { Link } from "react-router-dom";
import SignupForm from "./forms/SignupForm";

const SignupPage = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 2xl:w-4/12 px-4 flex items-center">
        <div className="bg-white p-10 rounded-xl w-full">
          <div className="text-center">
            <h1 className="mb-2">Sign up</h1>
            <span className="text-sw-gray text-sw-medium">
              Already have an account?{" "}
              <Link to="/login" className="text-sw-primary text-sw-medium">
                {" "}
                Sign in here
              </Link>
            </span>
          </div>
          <div className="mt-4">
            <SignupForm />
          </div>

          <p className="mb-0 mt-4 text-sw-medium text-center text-sw-gray">
            &copy; 2024 Socio World
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
