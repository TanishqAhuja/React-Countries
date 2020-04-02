function generateActions(actionString) {
    return {
        REQUEST: `${actionString}_REQUEST`,
        SUCCESS: `${actionString}_SUCCESS`,
    }
};

export const GET_ALL = generateActions('GET_ALL');
export const GET_BY_REGION = generateActions('GET_BY_REGION');
export const GET_DETAILS = generateActions('GET_DETAILS');
export const GET_BY_SEARCH = generateActions('GET_BY_SEARCH');
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
