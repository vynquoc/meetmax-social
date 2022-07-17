export const notificationReducer = (state:any = [], action: any) => {
    const {type, payload} = action
    switch (type) {
      case 'GET_NOTIFICATION_LIST':
        return [
          ...payload.notificationList
        ]
      case 'UPDATE_NOTIFICATION_LIST': 
        
        return [
          payload.newNotification,
          ...state
        ]
      case 'UPDATE_NOTIFICATION': 
        return state.map((notification: any) => notification.id === payload.notification.id ? payload.notification : notification)
       
      default:
        return state;
    }
  }
  
