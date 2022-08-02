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
    },
    getConversation: (data: conversationData) => {
        return axiosClient.post("/conversation/get-conversation", data)
    },
    updateReadConversation: (id: string)=> {
        return axiosClient.patch(`/conversation/${id}`, {readLastMessage: true})
    }
}

export default conversationApi