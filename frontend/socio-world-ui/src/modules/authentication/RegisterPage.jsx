import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "./forms/RegisterForm";
import { useToast } from "src/hooks/useToast";
import { splitFullname } from "src/utils/splitFullname";
import { postRequest } from "src/utils/request";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { showSuccess } = useToast();

  const handleRegisterFormSubmit = async (formValues) => {
    const { fullname, email, username, password, keepSignedIn } = formValues;
    const { firstName, middleName, lastName } = splitFullname(fullname);
    const data = {
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      email,
      username,
      password,
      keepSignedIn,
    };
    try {
      const res = await postRequest(`/api/v1/auth/register`, data, {
        withCredentials: "true",
      });
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
            <RegisterForm handleRegisterFormSubmit={handleRegisterFormSubmit} />
          </div>

          <p className="mb-0 mt-4 text-sw-medium text-center text-sw-gray">
            &copy; 2024 Socio World
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
