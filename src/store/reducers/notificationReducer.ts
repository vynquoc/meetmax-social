import {
    GET_NOTIFICATION_FAILED, GET_NOTIFICATION_START, GET_NOTIFICATION_SUCCESS, NotificationDispatchTypes, NotificationType, UPDATE_READ_NOTIFICATION, ADD_NOTIFICATION
  } from "../actionTypes/notificationActionTypes";
  
  interface DefaultState {
    loading: boolean,
    notificationList: NotificationType[],
    error: any
  }
  
  const defaultState: DefaultState = {
    loading: false,
    notificationList: [],
    error: null
  };
  
  const notificationsReducer = (state: DefaultState = defaultState, action: NotificationDispatchTypes) : DefaultState => {
    switch (action.type) {
        case GET_NOTIFICATION_START:
            return {
            ...state,
            loading: true
            }
        case GET_NOTIFICATION_SUCCESS:
            return {
                ...state,
                loading: false,
                notificationList: action.payload
            }
        case GET_NOTIFICATION_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UPDATE_READ_NOTIFICATION:
            const newList = state.notificationList.map((notification: NotificationType) => notification.id === action.payload.id ? action.payload : notification)
            return {
                ...state,
                notificationList: newList
            }
        case ADD_NOTIFICATION:
            return {
                ...state,
                notificationList: [action.payload, ...state.notificationList]
            }
        default:
            return state
    }
  };
  
  
  export default notificationsReducer