import { useState } from "react";
import FormInput from "../../../components/form-components/FormInput";
import ProgressBar from "../../../components/form-components/ProgressBar";
import { getPasswordStrengthProgress } from "../utils";

const SignupForm = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    keepSignedIn: "",
  });

  // to track first focus lose, so can show error on further focus state
  const [formInputFoucsed, setFormInputFocused] = useState({
    username: false,
    password: false,
    confirmPassword: false,
  });

  const [formErrors, setFormErrors] = useState({
    username: null,
    password: null,
    confirmPassword: null,
  });

  const [passwordProgress, setPasswordProgress] = useState({
    percentage: 0,
    progressColor: "#0000001A",
    backgroundColor: "#0000001A",
  });

  const helperText = {
    username: "We'll never share your email with anyone else.",
  };

  const getRegexForValidation = (name) => {
    if (name === "username")
      return { regex: /^[A-Za-z]{5,}$/, message: "Username should be atleast 5 characters" };
    else if (name === "password")
      return { regex: /^.{8,}$/, message: "Password should be atleast 8 characters" };
    else if (name === "confirmPassword")
      return { regex: new RegExp(`^${formValues.password}$`), message: "Password did not match" };
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
          helperText={formErrors.username || helperText.username}
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
    </form>
  );
};

export default SignupForm;
