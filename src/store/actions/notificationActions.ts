import {Dispatch} from "redux";
import {GET_NOTIFICATION_FAILED, GET_NOTIFICATION_SUCCESS, GET_NOTIFICATION_START, NotificationDispatchTypes, NotificationType, UPDATE_READ_NOTIFICATION, ADD_NOTIFICATION} from "../actionTypes/notificationActionTypes";
import notificationApi from "../../api/notificationApi";



export const getNotificationList = () => async (dispatch: Dispatch<NotificationDispatchTypes>) => {
    try {
            dispatch({
            type: GET_NOTIFICATION_START
        })
            const res: any = await notificationApi.getNotificationList();
            dispatch({
            type: GET_NOTIFICATION_SUCCESS,
            payload: res.notificationList
        })

    } catch(error: any) {
            dispatch({
            type: GET_NOTIFICATION_FAILED,
            payload: error.response.data.error
        })
    }
};


export const updateReadNotification = (updatedNotification: NotificationType) =>  (dispatch: Dispatch<NotificationDispatchTypes>) => {
    dispatch({type: UPDATE_READ_NOTIFICATION, payload: updatedNotification})
}

export const addNotification = (notification: NotificationType) =>  (dispatch: Dispatch<NotificationDispatchTypes>) => {
    dispatch({type: ADD_NOTIFICATION, payload: notification})
}



