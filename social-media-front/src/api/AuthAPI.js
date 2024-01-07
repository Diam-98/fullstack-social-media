import axiosClient from "./axiosClient";

export const AuthAPI = {
    login: (credentials) => {
        return axiosClient.post("/login", credentials);
    },
};
