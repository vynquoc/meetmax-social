import {
    SET_SOCKET,
    SocketDispatchTypes
  } from "../actionTypes/socketActionTypes";
  
  interface DefaultState {
    socket: any
  }
  
  const defaultState: DefaultState = {
    socket: null
  };
  
  const socketReducer = (state: DefaultState = defaultState, action: SocketDispatchTypes) : DefaultState => {
    switch (action.type) {
        case SET_SOCKET:
            return {
                socket: action.payload
        }
        default:
            return state
    }
  };
  
  
  
  
  export default socketReducer