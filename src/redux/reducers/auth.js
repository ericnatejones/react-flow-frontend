let defaultState = {
    isAuthenticated: false,
    user: {
        email:"",
        username: ""
    }
};

const mainReducer = function (state = defaultState, action) {
    switch (action.type) {
        case "SET_DATA":
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
