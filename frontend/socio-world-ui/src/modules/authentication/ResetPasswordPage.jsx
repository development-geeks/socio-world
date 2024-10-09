import { Link } from "react-router-dom";
import ResetPasswordForm from "./forms/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 2xl:w-4/12 px-4 flex items-center">
        <div className="bg-white p-10 rounded-xl w-full">
          <div className="text-center">
            <h1 className="mb-2">Forgot Password?</h1>
            <span className="text-sw-gray text-sw-medium">
              Enter the email address associated with account.
            </span>
          </div>
          <div className="mt-4">
            <ResetPasswordForm />
          </div>
          <p className="mb-4 mt-4 text-sw-gray text-center text-sw-medium">
            Back to{" "}
            <Link to="/login" className="text-sw-primary text-sw-medium">
              Sign in
            </Link>
          </p>
          <p className="mb-0 mt-4 text-center text-sw-medium text-sw-gray">
            &copy; 2024 Socio World
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
