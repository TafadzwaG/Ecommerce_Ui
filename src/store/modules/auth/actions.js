import axios from "axios";

export default {
    async signUp(context, payload) {
        const response = await axios.post("http://127.0.0.1:8000/api/user/register", {
            name: payload.name,
            email: payload.email,
            password: payload.password,
            password_confirmation: payload.password_confirmation,
        });

        const responseData = await response.data;

        if (response.status !== 200) {
            const error = new Error(responseData.message || "Failed to signup");
            throw error;
        }

        localStorage.setItem("token", responseData.access_token);
        localStorage.setItem("user", JSON.stringify(responseData.user));

        context.commit("setUser", {
            token: responseData.access_token,
            user: responseData.user,
        });
    },

    async signIn(context, payload) {
        const response = await axios.post("http://127.0.0.1:8000/api/user/login", {
            email: payload.email,
            password: payload.password,
        });

        const responseData = await response.data;

        if (response.status !== 200) {
            const error = new Error(responseData.message || "Failed to Login");
            throw error;
        }

        localStorage.setItem("token", responseData.access_token);
        localStorage.setItem("user", JSON.stringify(responseData.user));

        const token = responseData.access_token;
        const user = responseData.user;

        context.commit("setUser", {
            token: token,
            user: user
        });
    },

    logout(context) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        context.commit("setUser", {
            token: null,
            userId: null,
        });
    },
};