export const GET_NOTIFICATION_SUCCESS = "GET_NOTIFICATION_SUCCESS";
export const GET_NOTIFICATION_START = "GET_NOTIFICATION_START";
export const GET_NOTIFICATION_FAILED = "GET_NOTIFICATION_FAILED";
export const UPDATE_READ_NOTIFICATION = "UPDATE_READ_NOTIFICATION"
export const ADD_NOTIFICATION = "ADD_NOTIFICATION"

export type NotificationType = {
    id: string,
    content: string,
    isRead: boolean,
    recipient: object,
    type: string,
    url: string,
    createdBy: object,
    createdAt: string
}

export interface getNotificationStart {
  type: typeof GET_NOTIFICATION_START
}

export interface getNotificationSuccess {
  type: typeof GET_NOTIFICATION_SUCCESS,
  payload: NotificationType[]
}

export interface getNotificationFailed {
  type: typeof GET_NOTIFICATION_FAILED,
  payload: any
}

export interface updateReadNotification {
  type: typeof UPDATE_READ_NOTIFICATION,
  payload: NotificationType
}

export interface addNotification {
  type: typeof ADD_NOTIFICATION,
  payload: NotificationType
}

export type NotificationDispatchTypes = getNotificationStart | getNotificationSuccess | getNotificationFailed | updateReadNotification | addNotification