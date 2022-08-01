import {
    USER_LOGIN_FAILED,
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_FROM_TOKEN,
    UserDispatchTypes,
    UserType,
    USER_LOGOUT
  } from "../actionTypes/userActionTypes";
  
  interface DefaultState {
    loading: boolean,
    currentUser: UserType | null,
    error: any
  }
  
  const defaultState: DefaultState = {
    loading: false,
    currentUser: null,
    error: null
  };
  
  const userReducer = (state: DefaultState = defaultState, action: UserDispatchTypes) : DefaultState => {
    switch (action.type) {
        case USER_LOGIN_START:
            return {
            ...state,
            loading: true
            }
        case USER_LOGIN_SUCCESS:
            
            return {
            ...state,
            loading: false,
            currentUser: action.payload
            }
        case USER_LOGIN_FAILED:
            return {
            ...state,
            loading: false,
            error: action.payload
            }
        case USER_LOGOUT:
            localStorage.removeItem("access_token")
            return {
                ...state,
                currentUser: null
            }
        case USER_FROM_TOKEN:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
  };
  
  
  export default userReducer