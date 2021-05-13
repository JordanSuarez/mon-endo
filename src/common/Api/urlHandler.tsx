import axios from "axios";
import { getToken } from "common/authentication/authProvider";

// Get variable env from .env file
const { REACT_APP_API_PROTOCOL } = process.env;
const { REACT_APP_API_HOST } = process.env;
const { REACT_APP_API_PORT } = process.env;

// BASE URL of api, from .env file
export const apiUrl = `${REACT_APP_API_PROTOCOL}://${REACT_APP_API_HOST}/api`;

/**
 * Call API with all axios instance method (POST, GET, PUT, PATCH, DELETE)
 * Data is empty for GET and DELETE request
 * @param url = url from getEndpoint() method
 * @param method = one of require method (POST, GET, DELETE...)
 * @param data = Data as object like this = {email: userEmail, password: userPassword}
 * @returns Promise, so we can use .then and .catch after callApi
 */
// eslint-disable-next-line max-len
// export const callApi = (url, method, data = {}) => axiosInstance[method](url, data).then((response) => response);
// export const callApi = (url: string, method: string, data = {}): Promise<any> =>
//   axios[method](`${apiUrl}${url}`, data, {
//     headers: { Authorization: `Bearer ${getToken()}` || null },
//   }).then((response: Promise) => response);
