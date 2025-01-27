import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true, // Allow cookies to be sent
});

export default apiClient;
