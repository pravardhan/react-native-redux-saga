import { put, call } from 'redux-saga/effects';

import User from '../models/User';
import { api, getData } from '../common/utils/api';

function* getUserInfo(data) {
	try {
        console.log('GET USER DATA');
        const userData = yield call(getData, api.getUserInfo, {
            username: data.username
        });
        console.log(userData);
        yield put({type: 'STORE_USER_INFO', data: new User(userData)});
	} catch(error) {
        console.log('ERROR', error);
	}
}


export {
	getUserInfo,
};