import { fromJS } from 'immutable';
import * as types from './constants'

const initialState = fromJS({
    countries: [],
    details: {},
    borders: [],
    dark: false,
});

export default function rootReducer(state = initialState, action) {
    const newState = { ...state };

    switch (action.type) {
        case types.GET_ALL.SUCCESS:
            newState.countries = action.payload;
            break;
        case types.GET_BY_REGION.SUCCESS:
            newState.countries = action.payload;
            break;
        case types.GET_BY_SEARCH.SUCCESS:
            newState.countries = action.payload;
            break;
        case types.GET_DETAILS.SUCCESS:
            newState.details = action.payload.details;
            newState.borders = action.payload.borders;
            break;
        case types.TOGGLE_DARK_MODE:
            newState.dark = !state.dark;
            break;
        default:
            return state;
    }
    return newState;
};