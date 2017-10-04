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
      default:
          return {
              ...state
          }
  }
}

export default mainReducer;
