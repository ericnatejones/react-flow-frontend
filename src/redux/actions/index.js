import axios from "axios"

import {riversUrl} from "../../config"

export function loadRivers() {
  console.log("rivers loaded")
    return (dispatch) => {
        axios.get(riversUrl)
            .then((response) => {
              console.log(response.data)
                dispatch({
                    type: "SET_DATA",
                    rivers: response.data
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }
}
