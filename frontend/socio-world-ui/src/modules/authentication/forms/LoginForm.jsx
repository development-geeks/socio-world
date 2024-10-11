import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "src/components/form-components/FormInput";
import CustomButton from "src/components/CustomButton";
import { API_URL } from "src/utils/constants";

const LoginForm = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  // to track first focus lose, so can show error on further focus state
  const [formInputFoucsed, setFormInputFocused] = useState({
    username: false,
    password: false,
  });

  const [formErrors, setFormErrors] = useState({
    username: null,
    password: null,
  });

  const getRegexForValidation = (name) => {
    if (name === "username")
      return {
        regex: /^[A-Za-z0-9_]{5,}$/,
        message: "Should be atleast 5 characters. (Numbers and _ allowed)",
      };
    else if (name === "password")
      return { regex: /^.{8,}$/, message: "Password should be atleast 8 characters" };
  };

  const validate = (name, value, focused) => {
    const { regex, message } = getRegexForValidation(name);
    if (!focused) {
      return null;
    } else if (regex.test(value)) {
      return null;
    } else {
      return message;
    }
  };

  const validateForSubmit = () => {
    const hasError = Object.values(formErrors).some((error) => error !== null);
    const hasEmptyString = Object.values(formValues).some((value) => value === "");
    return !hasError && !hasEmptyString;
  };

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormValues({ ...formValues, [e.target.name]: e.target.checked });
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
      setFormErrors({
        ...formErrors,
        [e.target.name]: validate(e.target.name, e.target.value, formInputFoucsed[e.target.name]),
      });
    }
  };

  const handleBlur = (e) => {
    setFormInputFocused({ ...formInputFoucsed, [e.target.name]: true });
    setFormErrors({
      ...formErrors,
      [e.target.name]: validate(e.target.name, e.target.value, true),
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (validateForSubmit()) {
      const res = await axios.post(
        `${API_URL}/api/v1/auth/login`,
        { username: formValues.username, password: formValues.password },
        { withCredentials: "true" }
      );
      localStorage.setItem("access_token", res.data.access_token);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <form>
      <div className="mb-4">
        <FormInput
          placeholder="Username"
          type="text"
          value={formValues.username}
          onChange={handleChange}
          onBlur={handleBlur}
          name="username"
          isError={Boolean(formErrors.username)}
          helperText={formErrors.username}
          autoComplete="username"
        ></FormInput>
      </div>

      <div className="mb-4">
        <FormInput
          placeholder="Password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          isError={Boolean(formErrors.password)}
          helperText={formErrors.password}
          autoComplete="new-password"
        ></FormInput>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <FormInput
          label="Remember me"
          type="checkbox"
          checked={formValues.rememberMe}
          onChange={handleChange}
          name="rememberMe"
          labelClassNames="text-base text-sw-gray font-normal"
        ></FormInput>
        <Link to="/reset-password" className="text-sw-primary text-sw-medium">
          {" "}
          Forgot Password?
        </Link>
      </div>
      <div className="text-center">
        <CustomButton onClick={handleLogin} variant="primary" size="large">
          Login
        </CustomButton>
      </div>
    </form>
  );
};

export default LoginForm;
