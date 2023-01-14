 export const authReducer = (state={activeUser:null, users:null} , action) =>{

switch (action.type) {
  case "FETCH_USERS":
    return ({...state, users: action.payload});
    case 'AUTH':
    localStorage.setItem('user',JSON.stringify({...action.payload}))
    return state.activeUser = action.payload

    default:
    return state
}

  }