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
                    favorites: response.data.favoriteStreams
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
  if (!isNaN(param)){
    return (dispatch) => {
      console.log(param)

      axiosAuthInstance.put("api/favorite/param/"+which+streamId, { param })
      .then((response) => {
          console.log(response.data)

      })
    }
  }
  return {
    type: "DO_NOTHING"
  };
}

export function actionFavorite(_id){
  return (dispatch) => {
    console.log(_id)
    axiosAuthInstance.post("api/favorite/", {_id})
    .then((response) => {
        console.log(response.data)
        dispatch({
            type: "ADD_FAVORITE",
            favorites: response.data.favoriteStreams
        });

    })
  }
}

export function actionUnFavorite(_id){
  return (dispatch) => {
    console.log(_id)
    axiosAuthInstance({method:"delete", url:"api/favorite/", data:{_id}})
    .then((response) => {
        console.log(response.data)
        dispatch({
            type: "REMOVE_FAVORITE",
            favorites: response.data.favoriteStreams
        });

    })
  }
}

export function submitRiver({url, knownTitle}){
  return (dispatch, getState) => {
    console.log(url)
    let site = url.match(/\d/g).join("");
    console.log(site)

    axiosAuthInstance.post("stream/", {site, knownTitle})
    .then(response=>{
      const {rivers} = getState().mainReducer
      console.log("get state", getState().mainReducer)
      console.log("new stream: ", response.data)
      console.log("all streams: ", rivers)

      dispatch({
          type: "ADD_RIVER",
          river: response.data,
          rivers
      });
    })
  }
}
