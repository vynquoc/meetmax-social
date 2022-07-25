import axiosClient from "./axiosClient";

interface Post {
    photo: string,
    content: string
}

const postApi = {
    create: (data: Post) => {
        return axiosClient.post("/post/create", data)
    },
    getPostDetail: (id: string) => {
        return axiosClient.get(`/post/${id}`)
    },
    addLike: (id: string) => {
        return axiosClient.patch(`/post/${id}/like`)
    },
    unlike: (id: string) => {
        return axiosClient.patch(`/post/${id}/unlike`)
    },
    getPostList: () => {
        return axiosClient.get("/post/getPostList")
    }
    
}

export default postApi