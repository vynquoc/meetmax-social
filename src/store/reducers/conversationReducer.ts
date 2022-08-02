import { GET_CONVERSATION_LIST_START, ConversationDispatchTypes, ConversationType, GET_CONVERSATION_LIST_SUCCESS, GET_CONVERSATION_LIST_FAILED, ADD_NEW_CONVERSATION, SET_CURRENT_CONVERSATION_ID } from "../actionTypes/conversationActionTypes";
import { UPDATE_LAST_MESSAGE } from "../actionTypes/notificationActionTypes";
import {sortConversationsByLastMessage} from '../../utils'
interface DefaultState {
    loading: boolean,
    error: any,
    conversationList: ConversationType[],
    currentConversationId: string
}

const defaultState: DefaultState = {
    loading: false,
    error: null,
    conversationList: [],
    currentConversationId: ''
}

const conversationReducer = (state: DefaultState = defaultState, action: ConversationDispatchTypes): DefaultState => {
    switch(action.type) {
        case GET_CONVERSATION_LIST_START:
            return {
                ...state,
                loading: true
            }
        case GET_CONVERSATION_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                conversationList: action.payload
            }
        case GET_CONVERSATION_LIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_NEW_CONVERSATION:
            if (!state.conversationList.find((con:any) => con.id === action.payload.id)) {
                return {
                    ...state,
                    conversationList: [action.payload, ...state.conversationList]
                }
            }
            else {
                return state
            }
        case SET_CURRENT_CONVERSATION_ID:
            return {
                ...state,
                currentConversationId: action.payload,
            }
        case UPDATE_LAST_MESSAGE:
            return {
                ...state,
                conversationList: sortConversationsByLastMessage(state.conversationList.map((con: any) => con.id === action.payload?.conversation ? {...con, lastMessage: action.payload, seen: action.payload?.conversation as unknown === state.currentConversationId} : con))
            }
        default: 
            return state
    }
}

export default conversationReducer