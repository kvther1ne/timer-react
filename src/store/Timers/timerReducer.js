// reducer.js
import {
  ADD_TIMER, REMOVE_TIMER, START_TIMER, STOP_TIMER,
  RESET_TIMER, UPDATE_TIMER, SET_TIMERS
} from './timerActionTypes';

import TimerManager from '../../logic/TimerManager';

const initialState = {
  timerManager: new TimerManager(),
  timers: {},
};

const timerReducer = (state = initialState, action) => {
  const { timerManager } = state;

  switch (action.type) {
    case ADD_TIMER:
      timerManager.addTimer(action.payload.id, action.payload.duration, action.payload.callback);
      return {
        ...state,
        timers: { ...timerManager.getAllTimers() },
      };
    case REMOVE_TIMER:
      timerManager.removeTimer(action.payload.id);
      return {
        ...state,
        timers: { ...timerManager.getAllTimers() },
      };
    case START_TIMER:
      timerManager.startTimer(action.payload.id);
      return {
        ...state,
        timers: { ...timerManager.getAllTimers() },
      };
    case STOP_TIMER:
      timerManager.stopTimer(action.payload.id);
      return {
        ...state,
        timers: { ...timerManager.getAllTimers() },
      };
    case RESET_TIMER:
      timerManager.resetTimer(action.payload.id);
      return {
        ...state,
        timers: { ...timerManager.getAllTimers() },
      };
    case UPDATE_TIMER:
      timerManager.updateTimer(action.payload.id, action.payload.newDuration);
      return {
        ...state,
        timers: { ...timerManager.getAllTimers() },
      };
    case SET_TIMERS:
      return {
        ...state,
        timers: action.payload.timers,
      };
    default:
      return state;
  }
};

export default timerReducer;