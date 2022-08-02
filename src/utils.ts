import axios from "axios"

export const uploadImage = async (files: any) => {
    const formData = new FormData()
    formData.append("file", files[0])
    formData.append("upload_preset", "avatar")
    const response = await axios.post("https://api.cloudinary.com/v1_1/vydepchaine/image/upload", formData)
    return response
}

export const sortConversationsByLastMessage = (arr: any) => {
   
    return arr.sort((a: any, b: any) => {
        const aDate = new Date(a.lastMessage?.createdAt)
        const bDate = new Date(b.lastMessage?.createdAt)
   
        return +bDate - +aDate
    })
}