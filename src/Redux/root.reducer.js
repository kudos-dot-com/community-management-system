import { combineReducers } from "redux";
// import {persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

//Reducers;
import userReducer from "./User/user.reducer";
import loggedReducer from './is_logged/logged.reducer';

const rootReducer =  combineReducers({
  user: userReducer,
  is_logged : loggedReducer,
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;