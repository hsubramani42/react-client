import axios from "axios";

const api = () => {
  const api = axios.create({
    baseURL: "/api",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (localStorage.getItem("token"))
    api.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
  return api;
};

export default api;
