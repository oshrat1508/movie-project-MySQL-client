 export const authReducer = (state={activeUser:null} , action) =>{

switch (action.type) {
    case 'AUTH':
    localStorage.setItem('user',JSON.stringify({...action.payload}))
    return state.activeUser = action.payload
        
        

    default:
    return state
}

  }