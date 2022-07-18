export const postListReducer = (state:any = [], action: any) => {
    const {type, payload} = action
    switch (type) {
      case 'GET_POST_LIST':
        return [
          ...payload.postList
        ]
      
      case 'UPDATE_POST': 
        const updated = state.map((post: any) => post.id === payload.post.id ? payload.post : post)
        return updated
       
      default:
        return state;
    }
  }
  
