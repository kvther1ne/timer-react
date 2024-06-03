import {
    CHANGE_MINUTES,
    CHANGE_SECONDS,
    TOGGLE_EDIT,
    DISABLE_EDIT
} from './uiActionTypes';


const initialState = {
    isEditing: false,
    minutes: 0,
    seconds: 0,
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_EDIT:
            return {
                ...state,
                isEditing: !state.isEditing,
            };
        case DISABLE_EDIT:
            return {
                ...state,
                isEditing: action.payload.isEditing,
            };
        case CHANGE_MINUTES:
            return {
                ...state,
                minutes: action.payload.minutes,
            };
        case CHANGE_SECONDS:
            return {
                ...state,
                seconds: action.payload.seconds,
            };
        default:
            return state;
    }
};

export default uiReducer;