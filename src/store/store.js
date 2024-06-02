import { createStore } from "redux";
import { combineReducers } from 'redux';
import timerReducer from './Timers/timerReducer'
import uiReducer from './UI/uiReducer';

const rootReducer = combineReducers({
  timers: timerReducer,
  ui: uiReducer,
});

const store = createStore(rootReducer);

export default store;
