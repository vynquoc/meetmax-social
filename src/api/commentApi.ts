import axiosClient from "./axiosClient";

interface commentData {
    content: string;
    post: string,

}

const commentApi = {
    create: (data: commentData) => {
        return axiosClient.post("/comment/create", data)
    },
    
    
}

export default commentApi