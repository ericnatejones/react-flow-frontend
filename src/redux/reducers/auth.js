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
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state
            }
        case "LOGIN":
            localStorage.setItem("token", action.data.token);
            localStorage.setItem("username", action.data.user.username);
            return {
                ...state,
                user: {
                    username: action.data.user.username
                },
                isAuthenticated: true
            }
        case "LOGOUT":
            localStorage.removeItem("token");
            localStorage.removeItem("username");

            return {
                ...state,
                user: {
                    username: ""
                },
                isAuthenticated: false
            }
        default:
            return {
                ...state
            }
    }
}

export default mainReducer;
