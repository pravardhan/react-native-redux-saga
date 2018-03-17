import { takeEvery } from 'redux-saga/effects';

import { getUserInfo } from './authentication/authentication.saga'

export default function* appSaga() {
    yield takeEvery('GET_USER_INFO', getUserInfo);
};
