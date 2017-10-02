let defaultState = {
    isAuthenticated: false,
    user: {
        email:"",
        username: ""
    }
};

const mainReducer = function (state = defaultState, action) {
    console.log(action.data)
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state
            }
        case "LOGIN":
            localStorage.setItem("token", action.data.token);
            console.log("logged in")
            return {
                ...state,
                isAuthenticated: true
            }
        case "LOGOUT":
            localStorage.removeItem("token");
            console.log("logged out")
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return {
                ...state
            }
    }
}

export default mainReducer;
