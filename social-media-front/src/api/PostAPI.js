import axiosClient from "./axiosClient";

export const PostAPI = {
    addPost: (post) => {
        return axiosClient.post("/post", post);
    },

    getAllPost: () => {
        return axiosClient.get("/post");
    },

    favoritPosts: () => {
        return axiosClient.get("/post-likes");
    },
};
