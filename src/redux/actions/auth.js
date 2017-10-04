import axios from "axios"
import { baseURL } from "../../config"

//AUTHORIZATION
const axiosAuthInstance = axios.create({
    baseURL
});

axiosAuthInstance.interceptors.request.use(function (config) {
    let token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}, function (error) {
    return Promise.reject(error);
});

export function signup(credentials) {
    return (dispatch) => {
        axiosAuthInstance.post("auth/signup", credentials)
            .then((response) => {
                console.log(response.data, "succesful signup");

            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function login(credentials) {
    return (dispatch) => {
        axiosAuthInstance.post("auth/login", credentials)
            .then((response) => {
                dispatch({
                  type: "LOGIN",
                  data: response.data
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function logout() {
    return {
      type: "LOGOUT"
    };
}

export {axiosAuthInstance};
