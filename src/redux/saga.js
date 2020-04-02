import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as api from '../api';
import * as types from './constants';

function* getAllCountries() {
    const res = yield call(api.getAllCountries);
    yield put({
        type: types.GET_ALL.SUCCESS,
        payload: res,
    });
};

function* getCountriesByRegion(action) {
    const res = yield call(api.getCountriesByRegion, action.payload.region);
    yield put({
        type: types.GET_BY_REGION.SUCCESS,
        payload: res,
    });
};

function* getCountriesBySearch(action) {
    const res = yield call(api.getCountriesBySearch, action.payload.searchKey);
    yield put({
        type: types.GET_BY_SEARCH.SUCCESS,
        payload: res,
    });
};

function* getCountryDetails(action) {
    const res = yield call(api.getCountryDetails, action.payload.countryName);
    let borders = [];
    if (res[0].borders.length > 0) {
        borders = yield call(api.getCountryNamesByCodes, res[0].borders);
    }
    yield put({
        type: types.GET_DETAILS.SUCCESS,
        payload: { details: res[0], borders },
    });
};

function* watchForGetAllCountries() {
    yield takeLatest(types.GET_ALL.REQUEST, getAllCountries);
};

function* watchForGetCountriesByRegion() {
    yield takeLatest(types.GET_BY_REGION.REQUEST, getCountriesByRegion);
};

function* watchForGetCountriesBySearch() {
    yield takeLatest(types.GET_BY_SEARCH.REQUEST, getCountriesBySearch);
};

function* watchForGetCountryDetails() {
    yield takeLatest(types.GET_DETAILS.REQUEST, getCountryDetails);
};

export default function* rootSaga() {
    yield all([
        watchForGetAllCountries(),
        watchForGetCountriesByRegion(),
        watchForGetCountriesBySearch(),
        watchForGetCountryDetails(),
    ]);
};