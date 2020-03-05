/**
 * fork 為非阻塞 
 * all 為 promiseAll
 * put 為 dispatch
 * takeEvery 為監測dispatch => 呼叫 dispatch 時, action type 若為 此監測值, 則觸發 saga 反之則不觸發僅進行 redux
 */
import { all, takeEvery, put, fork } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';

import { getToken, clearToken } from '@iso/lib/helpers/utility';
import actions from './actions'; 

const history = createBrowserHistory();
const fakeApiCall = true; // auth0 or express JWT

export function* loginRequest() {
  yield takeEvery('LOGIN_REQUEST', function*({ payload }) {
    const { token } = payload;
    console.log({token});
    if (token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: token,
        profile: 'Profile',
      });
    } else {
      if (fakeApiCall) {
        yield put({
          type: actions.LOGIN_SUCCESS,
          token: 'secret token',
          profile: 'Profile',
        });
      } else {
        yield put({ type: actions.LOGIN_ERROR });
      }
    }
  });
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*(payload) {
    yield localStorage.setItem('id_token', payload.token);
  });
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {});
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    yield clearToken();
    history.push('/');
  });
}

/**
 * 檢查是否有系統權限
 * 驗證完成後再 put 新的 action (login success)
 */
export function* checkAuthorization() {
  yield takeEvery(actions.CHECK_AUTHORIZATION, function*() {
    const token = getToken().get('idToken');
    if (token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token,
        profile: 'Profile',
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(checkAuthorization),
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout),
  ]);
}
