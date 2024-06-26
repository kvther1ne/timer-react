// actions.js
import {
    ADD_TIMER, REMOVE_TIMER, START_TIMER, STOP_TIMER,
    RESET_TIMER, UPDATE_TIMER, SET_TIMERS, TICK_TIMER
  } from './timerActionTypes';
  
  export const addTimer = (id, duration, callback, onChange) => ({
    type: ADD_TIMER,
    payload: { id, duration, callback, onChange },
  });

  export const tickTimer = (id) => ({
    type: TICK_TIMER,
    payload: { id },
  });
  
  export const removeTimer = (id) => ({
    type: REMOVE_TIMER,
    payload: { id },
  });
  
  export const startTimer = (id) => ({
    type: START_TIMER,
    payload: { id },
  });
  
  export const stopTimer = (id) => ({
    type: STOP_TIMER,
    payload: { id },
  });
  
  export const resetTimer = (id) => ({
    type: RESET_TIMER,
    payload: { id },
  });
  
  export const updateTimer = (id, newDuration) => ({
    type: UPDATE_TIMER,
    payload: { id, newDuration },
  });
  
  export const setTimers = (timers) => ({
    type: SET_TIMERS,
    payload: { timers },
  });
  