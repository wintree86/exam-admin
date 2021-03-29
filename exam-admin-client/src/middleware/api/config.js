import axios from "axios";
import config from "../../config/config.js";

const client = () => {
  const _http = axios.create({
    baseURL: config.get("BASE_API"),
  });

  return _http;
};

const http = client();

export const axiosPost = (url, params) => {
  return http
    .post(url, params)
    .then((response) => {
      const { status, data } = response;
      return {
        status,
        data,
      };
    })
    .catch((err) => {
      const { status, data } = err.response;
      return {
        status,
        data,
      };
    });
};

export const axiosPut = (url, params) => {
  return http
    .put(url, params)
    .then((response) => {
      const { status, data } = response;
      return {
        status,
        data,
      };
    })
    .catch((err) => {
      const { status, data } = err.response;
      return {
        status,
        data,
      };
    });
};

export const axiosDelete = (url, params, data) => {
  return http
    .delete(url, { params, data })
    .then((response) => {
      const { status, data } = response;
      return {
        status,
        data,
      };
    })
    .catch((err) => err);
};

export const axiosGet = (url, params) => {
  return http
    .get(url, { params: params })
    .then((response) => {
      const { status, data } = response;
      return {
        status,
        data,
      };
    })
    .catch((err) => {
      const result = err.response;
      if (result === undefined) {
        return {
          status: 500,
          data: "server connection refused",
        };
      } else {
        const { status, data } = err.response;
        return {
          status,
          data,
        };
      }
    });
};
