import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_URL ??
  (typeof window !== "undefined" ? "http://localhost:4000" : "http://api:4000");

export const apiClient = axios.create({
  baseURL,
});

apiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("legalmitra_access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
