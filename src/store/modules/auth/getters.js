export default {
    token(state) {
        return state.token;
    },

    isAuthenticated(state) {
        return !!state.token;
    },

    userName(state) {
        return state.user.name;
    },

    userMail(state) {
        return state.user.email;
    }

};