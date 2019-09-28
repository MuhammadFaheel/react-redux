import {USER_LOGIN, GET_VALUE} from '../action/Type';
const initialState = {
    user : "",
        isAuthenticated : false
    }
export default function(state = initialState,action){
    switch(action.type){
        case USER_LOGIN:
            return{
                ...state,
                isAuthenticated : true,
                user : action.payload
            }
        case GET_VALUE :
            return{
                ...state,
                user:action.payload
            }
        default :
            return state
    }
}