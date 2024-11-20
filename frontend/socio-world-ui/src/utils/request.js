// src/utils/request.js
import axiosInstance from "./axiosSetup";

// Function to handle requests
const request = async (method, url, config = {}) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      ...config, // Spread all provided configuration options
    });
    return response; // Return response data
  } catch (error) {
    console.error(`${method.toUpperCase()} Request Error:`, error);
    throw error; // Propagate the error
  }
};

// Export individual methods for different HTTP methods
export const customRequest = (method, url, config = {}) => request(method, url, config);
export const getRequest = (url, config = {}) => request("get", url, config);
export const postRequest = (url, data, config = {}) => request("post", url, { data, ...config });
export const putRequest = (url, data, config = {}) => request("put", url, { data, ...config });
export const deleteRequest = (url, config = {}) => request("delete", url, config);
