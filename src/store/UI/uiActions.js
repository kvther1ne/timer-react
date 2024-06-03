import {
    CHANGE_MINUTES,
    CHANGE_SECONDS,
    TOGGLE_EDIT,
    DISABLE_EDIT
} from './uiActionTypes';

export const toggleEdit = () => ({
    type: TOGGLE_EDIT,
});

export const disableEdit = () => ({
    type: DISABLE_EDIT,
    payload: {isEditing: false}
});


export const changeMinutes = (minutes) => ({
    type: CHANGE_MINUTES,
    payload: { minutes }
});

export const changeSeconds = (seconds) => ({
    type: CHANGE_SECONDS,
    payload: { seconds }
});