import { postRequest } from "../request";

export const getAccessToken = async () => {
  const response = await postRequest("/api/v1/auth/refresh", {}, { withCredentials: true });
  const accessToken = response.data.access_token;
  localStorage.setItem("access_token", accessToken);
  return accessToken;
};
