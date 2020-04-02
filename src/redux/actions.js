import * as types from './constants';

export function getAllCountries() {
    return {
        type: types.GET_ALL.REQUEST,
    };
};

export function getCountriesByRegion(region) {
    return {
        type: types.GET_BY_REGION.REQUEST,
        payload: { region },
    };
};

export function getCountriesBySearch(searchKey) {
    return {
        type: types.GET_BY_SEARCH.REQUEST,
        payload: { searchKey },
    };
};

export function getCountryDetails(countryName) {
    return {
        type: types.GET_DETAILS.REQUEST,
        payload: { countryName },
    };
};

export function toggleDarkMode() {
    return {
        type: types.TOGGLE_DARK_MODE,
    }
}