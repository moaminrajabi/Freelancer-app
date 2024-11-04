import axios from "axios";
import path from "path";

const app = axios.create({
  baseURL: "http://localhost:5500/api",
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  path: app.patch,
};

export default http;
