import axiosClient from "./axiosClient";

interface notificationData {
    content: string;
    url: string,
    recipient: string,
    type: string
}

const notificationApi = {
    create: (data: notificationData) => {
        return axiosClient.post("/notification/create", data)
    },
    update: (id: string) => {
        return axiosClient.patch(`/notification/${id}`)
    },
    getNotificationList: () => {
        return axiosClient.get("/notification/get-notification-list")
    }
    
    
}

export default notificationApi