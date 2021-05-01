import {UserActionTypes} from './user.types';

const INITIAL_STATE = null;

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                ...action.payload
            }
        case UserActionTypes.SET_LOGGED_OUT:
            return null;
            
        default:
            return state;
    }
}

export default userReducer;
