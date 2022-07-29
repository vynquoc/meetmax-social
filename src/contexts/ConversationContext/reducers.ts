export const conversationReducer = (state:any = [], action: any) => {
 
    const {type, payload} = action
    switch (type) {
        case 'GET_CONVERSATION_LIST':
            return {
                ...state, 
                conversationList: payload.conversationList
            }
      
        case 'SET_CURRENT_CONVERSATION':
            const existedConversation = state.conversationList.find((conversation: any) => conversation.id === payload.conversation.id)
            if (existedConversation) {
                return {
                    ...state,
                    currentConversation: payload.conversation
                }
            } else {
                const updatedConversationList = [payload.conversation, ...state.conversationList]
                return {
                    ...state,
                    currentConversation: payload.conversation,
                    conversationList: updatedConversationList
                }
            }
        case 'UPDATE_CONVERSATION':
            const updatedList = state.conversationList.map((conversation: any) => {
                return conversation.id === payload.updatedConversation.id ? payload.updatedConversation : conversation
            })
            return {
                ...state,
                conversationList: updatedList
            }
        case 'UPDATE_LAST_MESSAGE':
            const newList = state.conversationList.map((conversation: any) => {
                return conversation.id === payload.message.conversation ? {...conversation, lastMessage: payload.message} : conversation
            })
            return {
                ...state,
                conversationList: newList
            }
    

      default:
        return state;
    }
  }
  
