let defaultState = {
  loggedIn: false
};

let mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(state)
      return {
        ...state,
        loggedIn: true
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false
      };
    case "SIGNUP":
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state;
  }
};

export default mainReducer;
