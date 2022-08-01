import {combineReducers} from "redux";
import userReducer from "./userReducer";
import socketReducer from "./socketReducer";
import notificationsReducer from "./notificationReducer";

const rootReducer = combineReducers({
  user: userReducer,
  socket: socketReducer,
  notifications: notificationsReducer
});

export default rootReducer