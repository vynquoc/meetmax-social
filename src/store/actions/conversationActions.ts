import { Dispatch } from "redux";
import { GET_CONVERSATION_LIST_START, ConversationDispatchTypes, GET_CONVERSATION_LIST_SUCCESS, GET_CONVERSATION_LIST_FAILED, ConversationType, ADD_NEW_CONVERSATION, SET_CURRENT_CONVERSATION_ID, MessageType } from "../actionTypes/conversationActionTypes";
import conversationApi from "../../api/conversationApi";
import { UPDATE_LAST_MESSAGE } from "../actionTypes/notificationActionTypes";
import { sortConversationsByLastMessage } from "../../utils";

export const getConversationList = () => async (dispatch: Dispatch<ConversationDispatchTypes>) => {
    try {
        dispatch({type: GET_CONVERSATION_LIST_START})
        const response: any = await conversationApi.getConversations()
        dispatch({type: GET_CONVERSATION_LIST_SUCCESS, payload: sortConversationsByLastMessage(response.conversations)})
    } catch (error: any) {
        dispatch({type: GET_CONVERSATION_LIST_FAILED, payload: error.response})
    }   
}

export const addNewConversation  = (conversation: ConversationType) => (dispatch: Dispatch<ConversationDispatchTypes>) => {
    dispatch({type: ADD_NEW_CONVERSATION, payload: conversation})
}

export const setCurrentConversationId = (conversationId: string) => (dispatch: Dispatch<ConversationDispatchTypes>) => {
    dispatch({type: SET_CURRENT_CONVERSATION_ID, payload: conversationId})
}

export const updateLastMessage = ((message: MessageType) => (dispatch: Dispatch<ConversationDispatchTypes>) => {
    dispatch({type: UPDATE_LAST_MESSAGE, payload: message})
})