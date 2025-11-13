import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "https://chat-app-client-d11t.onrender.com" : "/api",
    withCredentials: true,
});