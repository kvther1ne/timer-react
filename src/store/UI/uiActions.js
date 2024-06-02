import {
    CHANGE_MINUTES,
    CHANGE_SECONDS,
    TOGGLE_EDIT
} from './uiActionTypes';

export const toggleEdit = () => ({
    type: TOGGLE_EDIT,
});

export const changeMinutes = (minutes) => ({
    type: CHANGE_MINUTES,
    payload: { minutes }
});

export const changeSeconds = (seconds) => ({
    type: CHANGE_SECONDS,
    payload: { seconds }
});