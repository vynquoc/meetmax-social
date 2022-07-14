import axiosClient from "./axiosClient";

interface Post {
    photo: string,
    content: string
}



const postApi = {
    create: (data: Post) => {
        return axiosClient.post("/post/create", data)
    },
    
}

export default postApi