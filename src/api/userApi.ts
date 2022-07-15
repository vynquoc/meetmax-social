import axiosClient from "./axiosClient";

const userApi = {
    getUser: (username: any) => {
        return axiosClient.get(`/user/${username}`)
    },
    
}

export default userApi