import axios, { AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use(
  async (req) => {
    console.log("req", req);
    return req;
  },
  (err) => {
    console.log("err request", err);
  }
);

instance.interceptors.response.use(
  async (res) => {
    console.log("API response", res);
    return res;
  },
  async (err) => {
    console.log("err response", err);
  }
);

const API = instance;

export { API };
