import axiosClient from "./axiosClient";

const userApi = {
    getUser: (username: any) => {
        return axiosClient.get(`/user/${username}`)
    },
    getSuggestionFriendList: () => {
        return axiosClient.get("/user/suggestion-list")
    }
    
}

export default userApi