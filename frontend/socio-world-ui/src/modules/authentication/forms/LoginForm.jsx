import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "src/components/form-components/FormInput";

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    rememberMe: "",
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/api/auth/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username: "sahilkhan", password: "admin123" }),
  //       credentials: "include",
  //     });
  //     console.log(res.data);

  //     const userRes = await fetch("http://localhost:8000/api/users/all", {
  //       method: "GET",
  //       credentials: "include",
  //     });
  //     console.log(userRes);
  //   };
  //   fetchData();
  // }, []);

  const getRegexForValidation = (name) => {
    if (name === "username")
      return { regex: /^[A-Za-z]{5,}$/, message: "Username should be atleast 5 characters" };
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
    </form>
  );
};

export default LoginForm;
