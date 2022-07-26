import axiosClient from "./axiosClient";

interface messageData {
    content: string;
    conversationId: string,

}

const messageApi = {
    create: (data: messageData) => {
        return axiosClient.post("/message/create", data)
    },
    getMessages: (conversationId: string) => {
        return axiosClient.get(`/message/${conversationId}`)
    }
    
    
}

export default messageApi