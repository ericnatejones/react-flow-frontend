import axios from "axios"
import { authUrl } from "../../config"

export function signup(credentials) {
    return (dispatch) => {
        axios.post(authUrl + "signup", credentials)
            .then((response) => {
                console.log(response.data);

            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function login(credentials) {
    return (dispatch) => {
        axios.post(authUrl + "login", credentials)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
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
