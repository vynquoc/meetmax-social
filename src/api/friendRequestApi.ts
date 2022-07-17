import axiosClient from "./axiosClient";

const friendRequestApi = {
    sendRequest: (recepient: string) => {
        return axiosClient.post("/friend-request/create", {recepient})
    },
    acceptRequest: (requester: string) => {
        return axiosClient.post("/friend-request/accept", {requester})
    },
    rejectRequest: (requester: string) => {
        return axiosClient.post("/friend-request/reject", {requester})
    },
    cancelRequest: (recepient: string) => {
        return axiosClient.post("friend-request/cancel", {recepient})
    },
    unfriend: (userToUnfriend: string) => {
        return axiosClient.post("/friend-request/unfriend", {userToUnfriend})
    }
}

export default friendRequestApi