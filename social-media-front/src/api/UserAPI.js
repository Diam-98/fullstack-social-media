import axiosClient from "./axiosClient";

export const UserAPI = {
    login: (credentials) => {
        return axiosClient.post("/login", credentials);
    },

    currentUser: () => {
        return axiosClient.get("/user");
    },

    logout: () => {
        return axiosClient.post("/logout");
    },

    register: (user) => {
        return axiosClient.post("/register", user);
    },

    profile: (user) => {
        return axiosClient.put("/user/profile", user);
    },

    users: () => {
        return axiosClient.get("/network/all");
    },

    getMyNetwork: () => {
        return axiosClient.get("/network");
    },

    getMyPosts: () => {
        return axiosClient.get("/user/posts");
    },
};
