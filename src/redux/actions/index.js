import { axiosAuthInstance } from './auth'

export function loadRivers() {
    return (dispatch) => {
        axiosAuthInstance.get("stream")
            .then((response) => {
                dispatch({
                    type: "SET_RIVERS",
                    rivers: response.data
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function loadFavorites() {
    return (dispatch) => {
        axiosAuthInstance.get("api/favorite")
            .then((response) => {
                dispatch({
                    type: "SET_FAVORITES",
                    favorites: response.data
                });
            })
            .catch((err) => {
                console.log(err, ": err")
                if(err.response.statusText === "Unauthorized"){
                  dispatch({
                      type: "SET_FAVORITES",
                      favorites: []
                  });
                };

            })
    }
}
export function updateParam(which, streamId, param) {
    return (dispatch) => {
      console.log(param)
      axiosAuthInstance.put("api/favorite/param/"+which+streamId, { param })
      .then((response) => {
          console.log(response.data)

      })
    }
}
