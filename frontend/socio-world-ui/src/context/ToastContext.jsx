import PropTypes from "prop-types";
import { createContext, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const showToast = useCallback((message, options) => {
    toast(message, options);
  }, []);

  const showSuccess = useCallback((message) => {
    toast(message, {
      duration: 3000,
      style: { backgroundColor: "#0CBC87", color: "#FFF", fontSize: "15px" },
    });
  }, []);

  const showError = useCallback((message) => {
    toast(message, {
      duration: 3000,
      style: { backgroundColor: "#D6293E", color: "#FFF", fontSize: "15px" },
    });
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, showSuccess, showError }}>
      <Toaster position="top-right" />
      {children}
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
