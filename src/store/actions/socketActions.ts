import {Dispatch} from "redux";
import {SET_SOCKET, SocketDispatchTypes} from "../actionTypes/socketActionTypes"




export const setSocket = (socket: any) => async (dispatch: Dispatch<SocketDispatchTypes>) => {
    dispatch({type: SET_SOCKET, payload: socket})
};

