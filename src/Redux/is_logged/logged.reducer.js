import { LoggesActionTypes } from "./logged.types";

const INITIAL_STATE = false;

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case LoggesActionTypes.SET_LOGGED:
            return !INITIAL_STATE;
        default:
            return state;
    }
}

export default userReducer;
