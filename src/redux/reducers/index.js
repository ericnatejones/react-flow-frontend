let rivers = [];
let favorites = [];
let defaultState = {rivers, favorites};

const mainReducer = function (state = defaultState, action) {
  switch (action.type) {
      case "SET_RIVERS":
          return {
              ...state,
              rivers: action.rivers
          }
      case "SET_FAVORITES":
          return {
              ...state,
              favorites: action.favorites
          }
      case "LOAD_FLOW":
         return {
           ...state
         }
      case "ADD_FAVORITE":
         return {
           ...state,
           favorites: action.favorites
         }
     case "REMOVE_FAVORITE":
        return {
          ...state,
          favorites: action.favorites
        }
      default:
          return {
              ...state
          }
  }
}

export default mainReducer;
