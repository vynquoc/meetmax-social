import { UPDATE_LAST_MESSAGE } from "./notificationActionTypes"
import { UserType } from "./userActionTypes"

export const GET_CONVERSATION_LIST_START = "GET_CONVERSATION_LIST_START"
export const GET_CONVERSATION_LIST_SUCCESS = "GET_CONVERSATION_LIST_SUCCESS"
export const GET_CONVERSATION_LIST_FAILED = "GET_CONVERSATION_LIST_FAIlED"
export const ADD_NEW_CONVERSATION = "ADD_NEW_CONVERSATION"
export const SET_CURRENT_CONVERSATION_ID = "SET_CURRENT_CONVERSATION_ID"

export type MessageType = {
    id: string,
    content: string,
    sender: UserType,
    conversation: ConversationType
    createdAt: string
}

export type ConversationType = {
    id: string,
    members: UserType[],
    createdAt: string,
    lastMessage: MessageType
}

export interface getConversationListStart {
  type: typeof GET_CONVERSATION_LIST_START
}

export interface getConversationListSuccess {
    type: typeof GET_CONVERSATION_LIST_SUCCESS,
    payload: ConversationType[]
}

export interface getConversationListFailed {
    type: typeof GET_CONVERSATION_LIST_FAILED,
    payload: any
}

export interface addNewConversation {
    type: typeof ADD_NEW_CONVERSATION,
    payload: ConversationType
}

export interface setCurrentConversationId {
    type: typeof SET_CURRENT_CONVERSATION_ID,
    payload: string
}

export interface updateLastMessage {
    type: typeof UPDATE_LAST_MESSAGE,
    payload: MessageType
  }





export type ConversationDispatchTypes = getConversationListStart | getConversationListSuccess | getConversationListFailed | addNewConversation | setCurrentConversationId | updateLastMessage