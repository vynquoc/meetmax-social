import {Dispatch} from "redux";
import {USER_LOGIN_FAILED, USER_LOGIN_START, USER_LOGIN_SUCCESS, UserDispatchTypes, USER_LOGOUT} from "../actionTypes/userActionTypes";
import authApi from "../../api/authApi";



export const userLogin = (email: string, password: string) => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
        dispatch({
        type: USER_LOGIN_START
        })

        const res:any = await authApi.signIn({email, password});
        localStorage.setItem("access_token", res.token)
        dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.user
        })

  } catch(e: any) {
        dispatch({
        type: USER_LOGIN_FAILED,
        payload: e.response.data.error
        })
  }
};

export const userFromToken = () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
        dispatch({
        type: USER_LOGIN_START
        })
       
        const res:any = await authApi.getUserByToken();
        
        dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.user
        })

  } catch(e: any) {
        dispatch({
        type: USER_LOGIN_FAILED,
        payload: e.response.data.error
        })
  }
}

export const userLogout = () => (dispatch: Dispatch<UserDispatchTypes>) => {
    dispatch({
        type: USER_LOGOUT
    })
}