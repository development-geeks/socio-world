import { useState } from "react";
import FormInput from "../../../components/form-components/FormInput";
import ProgressBar from "../../../components/form-components/ProgressBar";
import { getPasswordStrengthProgress } from "../utils";

const ResetPasswordForm = () => {
  const [formValues, setFormValues] = useState({
    password: "",
    confirmPassword: "",
  });

  // to track first focus lose, so can show error on further focus state
  const [formInputFoucsed, setFormInputFocused] = useState({
    password: false,
    confirmPassword: false,
  });

  const [formErrors, setFormErrors] = useState({
    password: null,
    confirmPassword: null,
  });

  const [passwordProgress, setPasswordProgress] = useState({
    percentage: 0,
    progressColor: "#0000001A",
    backgroundColor: "#0000001A",
  });

  const getRegexForValidation = (name) => {
    if (name === "password")
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
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setFormErrors({
      ...formErrors,
      [e.target.name]: validate(e.target.name, e.target.value, formInputFoucsed[e.target.name]),
    });

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
    </form>
  );
};

export default ResetPasswordForm;
