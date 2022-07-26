export const conversationReducer = (state:any = [], action: any) => {
 
    const {type, payload} = action
    switch (type) {
        case 'GET_CONVERSATION_LIST':
            return {
                ...state, 
                conversationList: payload.conversationList
            }
        case 'SET_CURRENT_CONVERSATION':
            return {
                ...state,
                currentConversation: payload.conversation
            }
        case 'UPDATE_CONVERSATION':
            const updatedList = state.conversationList.map((conversation: any) => {
                return conversation.id === payload.updatedConversation.id ? payload.updatedConversation : conversation
            })
            return {
                ...state,
                conversationList: updatedList
            }
    

      default:
        return state;
    }
  }
  
