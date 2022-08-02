import {combineReducers} from "redux";
import userReducer from "./userReducer";
import socketReducer from "./socketReducer";
import notificationsReducer from "./notificationReducer";
import conversationReducer from "./conversationReducer";

const rootReducer = combineReducers({
  user: userReducer,
  socket: socketReducer,
  notifications: notificationsReducer,
  conversations: conversationReducer
});

export default rootReducer