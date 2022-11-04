import {combineReducers} from '@reduxjs/toolkit';
import appReducer from './AppRedux';
import userReducer from './UserRedux';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
});

export default rootReducer;
