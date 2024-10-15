// src/utils/axiosSetup.js
import axios from "axios";
import { API_URL } from "./constants";
import { getAccessToken } from "./authentication/getAccessToken";
import { customRequest } from "./request";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000, // Set timeout for requests
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    console.log(`Request: ${config.method.toUpperCase()} ${config.url}`, config.data);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data; // Return only the data part
    }
    return Promise.reject(new Error("Unexpected response structure"));
  },
  async (error) => {
    let errorMessage = "An unknown error occurred.";
    if (error.response) {
      switch (error.response.status) {
        case 400:
          errorMessage = "Bad Request. Please check your input.";
          break;
        case 401:
          try {
            const originalRequest = error.config;
            if (!originalRequest._retry) {
              originalRequest._retry = true;
              const accessToken = await getAccessToken();
              originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
              const { method, url, ...config } = originalRequest;
              return customRequest(method, url, config);
            } else {
              errorMessage = "Unauthorized. Please log in again.";
              localStorage.clear();
              window.location.href = "/login";
            }
            // eslint-disable-next-line no-unused-vars
          } catch (error) {
            errorMessage = "Unauthorized. Please log in again.";
            localStorage.clear();
            window.location.href = "/login";
          }
          break;
        case 403:
          errorMessage = "Forbidden. You do not have permission.";
          break;
        case 404:
          errorMessage = "Not Found. The requested resource was not found.";
          break;
        case 500:
          errorMessage = "Internal Server Error. Please try again later.";
          break;
        default:
          errorMessage = error.response.data.message || "An error occurred.";
      }
    } else if (error.request) {
      errorMessage = "Network Error. Please check your connection.";
    }

    console.error("Response Error:", errorMessage);
    alert(errorMessage); // Use a notification library for better UX
    return Promise.reject(error);
  }
);

export default axiosInstance;
