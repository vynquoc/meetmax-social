import axiosClient from "./axiosClient";

interface Post {
    photo: string,
    content: string
}

const postApi = {
    create: (data: Post) => {
        return axiosClient.post("/post/create", data)
    },
    addLike: (data: string) => {
        return axiosClient.patch(`/post/${data}/like`)
    },
    unlike: (data: string) => {
        return axiosClient.patch(`/post/${data}/unlike`)
    },
    getPostList: () => {
        return axiosClient.get("/post/getPostList")
    }
    
}

export default postApi