import axios from "axios";

const API = axios.create({ baseURL: import.meta.env.VITE_BASEURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
