import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";

export const useToast = () => {
  const toastContext = useContext(ToastContext);
  const showToast = toastContext.showToast;
  const showSuccess = toastContext.showSuccess;
  const showError = toastContext.showError;

  return { showToast, showSuccess, showError };
};
