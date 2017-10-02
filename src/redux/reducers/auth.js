let isAuthenticated = false;
localStorage.token ? isAuthenticated = true: isAuthenticated = false;
console.log("once only please")

let defaultState = {
    isAuthenticated,
    user: {
        username: localStorage.username
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
            localStorage.setItem("username", action.data.user.username);
            console.log("logged in")
            return {
                ...state,
                isAuthenticated: true
            }
        case "LOGOUT":
            localStorage.removeItem("token");
            localStorage.removeItem("username");

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
