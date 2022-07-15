import axiosClient from "./axiosClient";

const friendRequestApi = {
    sendRequest: (recipient: string) => {
        return axiosClient.post("/friend-request/create", {recipient})
    },
    acceptRequest: (requester: string) => {
        return axiosClient.post("/friend-request/accept", {requester})
    },
    rejectRequest: (requester: string) => {
        return axiosClient.post("/friend-request/reject", {requester})
    }
}

export default friendRequestApi