import classNames from "classnames";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";

const FormInput = ({
  label,
  value,
  type,
  onChange,
  helperText,
  labelClassNames,
  helperTextClassNames,
  isError,
  ...inputProps
}) => {
  // base classes for input fields
  const baseTextInputClasses =
    "bg-gray-50 border-[1.5px] border-gray-400 text-gray-900 text-lg rounded-md focus-visible:outline-none focus-visible:border-[1.5px] focus-visible:border-[#0f6fec] w-full py-2.5 px-6";
  const baseCheckboxInputClasses =
    "w-4 h-4 text-sw-primary bg-gray-100 border-gray-300 rounded focus:ring-sw-primary";

  // base classes for label
  const baseLabelClasses = "block mb-2 text-sm font-medium text-gray-900";

  // joining classesfor input field
  const inputClasses = twMerge(
    classNames(
      {
        [baseTextInputClasses]: !["checkbox"].includes(type),
        [baseCheckboxInputClasses]: type === "checkbox",
      },
      inputProps.className,
      {
        "border-sw-danger focus-visible:border-sw-danger": isError,
      }
    )
  );

  // joining classes for label
  const labelClasses = twMerge(
    classNames(
      baseLabelClasses,
      {
        "mb-0 ml-2": type === "checkbox",
      },
      labelClassNames
    )
  );

  // joining classes for helper text
  const helperTextClasses = twMerge(
    classNames(
      "text-sm p-1 pb-0 text-sw-gray",
      {
        "text-sw-danger": isError,
      },
      helperTextClassNames
    )
  );

  // joining classes for input group (input field + label)
  const inputGroupClasses = twMerge(
    classNames({
      "flex flex-row-reverse justify-end items-center": type === "checkbox",
    })
  );

  const [passwordInputType, setPasswordInputType] = useState(type);
  const onViewPasswordClick = () => {
    setPasswordInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className="sw-form-input flex flex-col">
      <div className={inputGroupClasses}>
        {label && <label className={labelClasses}>{label}</label>}

        <div className="relative flex items-center">
          <input
            className={inputClasses}
            value={value}
            type={type === "password" ? passwordInputType : type}
            onChange={onChange}
            {...inputProps}
          ></input>
          {type === "password" &&
            (passwordInputType === "password" ? (
              <FaEye
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sw-gray cursor-pointer"
                onClick={onViewPasswordClick}
              />
            ) : (
              <FaEyeSlash
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sw-gray cursor-pointer"
                onClick={onViewPasswordClick}
              />
            ))}
        </div>
      </div>

      {helperText && <span className={helperTextClasses}>{helperText}</span>}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  type: PropTypes.string,
  labelClassNames: PropTypes.string,
  isError: PropTypes.bool,
  helperTextClassNames: PropTypes.string,
};

export default FormInput;
