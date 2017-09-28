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
            })
            .catch((err) => {
                console.error(err);
            })
    }
}