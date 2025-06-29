import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://test-back-end-9h00.onrender.com",
  timeout: 5000,
});

export default axiosInstance;
