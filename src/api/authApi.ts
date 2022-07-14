import axiosClient from "./axiosClient";

interface User {
    username: string,
    firstName: string,
    lastName: string,
    avatar: string,
    confirmPassword: string,
    gender: string,
    dateOfBirth: string, 
    email: string
}

interface userSignIn {
    email: string,
    password: string
}

const authApi = {
    signUp: (data: User) => {
        return axiosClient.post("/auth/signup", data)
    },
    signIn: (data: userSignIn) => {
        return axiosClient.post("/auth/signin", data)
    },
    getUserByToken: () => {
        return axiosClient.get("/auth/check-token")
    }
}

export default authApi