import { useState } from "react";
import FormInput from "src/components/form-components/FormInput";
import ProgressBar from "src/components/form-components/ProgressBar";
import CustomButton from "src/components/CustomButton";
import { getPasswordStrengthProgress } from "src/utils/authentication/getPasswordStrengthProgress";
import PropTypes from "prop-types";

const RegisterForm = ({ handleRegisterFormSubmit }) => {
  const [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    keepSignedIn: false,
  });

  // to track first focus lose, so can show error on further focus state
  const [formInputFoucsed, setFormInputFocused] = useState({
    fullname: false,
    email: false,
    username: false,
    password: false,
    confirmPassword: false,
  });

  const [formErrors, setFormErrors] = useState({
    fullname: null,
    email: null,
    username: null,
    password: null,
    confirmPassword: null,
  });

  const [passwordProgress, setPasswordProgress] = useState({
    percentage: 0,
    progressColor: "#0000001A",
    backgroundColor: "#0000001A",
  });

  const getRegexForValidation = (name) => {
    if (name === "username")
      return {
        regex: /^[A-Za-z0-9_]{5,}$/,
        message: "Should be atleast 5 characters. (Numbers and _ allowed)",
      };
    else if (name === "password")
      return { regex: /^.{8,}$/, message: "Password should be atleast 8 characters" };
    else if (name === "confirmPassword")
      return { regex: new RegExp(`^${formValues.password}$`), message: "Password did not match" };
    else if (name === "email")
      return {
        regex: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Please enter a valid email address",
      };
    else if (name === "fullname")
      return {
        regex: /^[A-Za-z\s]{4,}$/,
        message: "Name should be only letters and atleast 4 characters",
      };
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

    if (e.target.name === "password") {
      setPasswordProgress(getPasswordStrengthProgress(e.target.value));
    }
  };

  const handleBlur = (e) => {
    setFormInputFocused({ ...formInputFoucsed, [e.target.name]: true });
    setFormErrors({
      ...formErrors,
      [e.target.name]: validate(e.target.name, e.target.value, true),
    });
  };

  const validateForSubmit = () => {
    const hasError = Object.values(formErrors).some((error) => error !== null);
    const hasEmptyString = Object.values(formValues).some((value) => value === "");
    return !hasError && !hasEmptyString;
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!validateForSubmit()) {
      return;
    }
    handleRegisterFormSubmit(formValues);
  };

  return (
    <form>
      <div className="mb-4">
        <FormInput
          placeholder="Full Name"
          type="text"
          value={formValues.fullname}
          onChange={handleChange}
          onBlur={handleBlur}
          name="fullname"
          isError={Boolean(formErrors.fullname)}
          helperText={formErrors.fullname}
          autoComplete="fullname"
        ></FormInput>
      </div>
      <div className="mb-4">
        <FormInput
          placeholder="Email Id"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          isError={Boolean(formErrors.email)}
          helperText={formErrors.email}
          autoComplete="username"
        ></FormInput>
      </div>
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

        <div className="mt-2">
          <ProgressBar
            percentage={passwordProgress.percentage}
            progressColor={passwordProgress.progressColor}
          />
        </div>
      </div>

      <div className="mb-4">
        <FormInput
          placeholder="Confirm Password"
          type="password"
          value={formValues.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          name="confirmPassword"
          isError={Boolean(formErrors.confirmPassword)}
          helperText={formErrors.confirmPassword}
          autoComplete="new-password"
        ></FormInput>
      </div>
      <div className="mb-4">
        <FormInput
          label="Keep me signed in"
          type="checkbox"
          checked={formValues.keepSignedIn}
          onChange={handleChange}
          name="keepSignedIn"
          labelClassNames="text-base text-sw-gray font-normal"
        ></FormInput>
      </div>
      <div className="text-center">
        <CustomButton onClick={handleRegister} variant="primary" size="large">
          Sign me up
        </CustomButton>
      </div>
    </form>
  );
};

RegisterForm.propTypes = {
  handleRegisterFormSubmit: PropTypes.func,
};

export default RegisterForm;
