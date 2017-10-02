let rivers = [];

let defaultState = {rivers};

const mainReducer = function (state = defaultState, action) {
  switch (action.type) {
      case "SET_DATA":
            console.log(action.rivers, ": rivers")

          return {
              ...state,
              rivers: action.rivers
          }

      default:
          return {
              ...state
          }
  }
}

export default mainReducer;
