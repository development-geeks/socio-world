import PropTypes from 'prop-types';

const MyButton = ({
  onClick,
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  icon: Icon,
  className,
}) => {
    
  // Base styles for the button
  const baseStyles = `font-semibold rounded transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2`;

  // Variant styles
  const variantStyles = {
    primary: 'bg-blue-500 w-4/5 text-white hover:bg-blue-600 focus:ring-blue-400',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-400',
  };

  // Size styles
  const sizeStyles = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4',
    large: 'py-3 px-6 text-lg',
  };

  // Combine styles
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  return (
    <button
      onClick={!disabled && !loading ? onClick : null}
      className={classes}
      disabled={disabled}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5 mr-2 inline-block"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0112 0H4z"
          />
        </svg>
      )}
      {Icon && <Icon className="inline-block mr-2" />}
      {loading ? 'Loading...' : children}
    </button>
  );
};

// PropTypes for type checking
MyButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.elementType,
  className: PropTypes.string,
};

export default MyButton;
