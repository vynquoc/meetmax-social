import axiosClient from "./axiosClient";

interface conversationData {
    recipient: string;
}

const conversationApi = {
    create: (data: conversationData) => {
        return axiosClient.post("/conversation/create", data)
    },
    getConversations: () => {
        return axiosClient.get("/conversation/get-conversations")
    }
    
    
}

export default conversationApi