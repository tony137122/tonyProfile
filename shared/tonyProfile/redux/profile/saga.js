// saga.js
import { all, takeEvery, put, call } from 'redux-saga/effects';
import profileActions from './actions';
import DemoProfileData from './profile.data';
import { fetchFunc, fetchHeader } from '@iso/config/fetch.config'

function* fetchProfileDataEffect() {
  try {
    let profile = DemoProfileData;
    yield put(profileActions.fetchProfileDataSuccess(profile));
  } catch (error) {
    yield put(profileActions.fetchProfileDataFailure(error));
  }
}

/**
 * 取得專案列表
 */
export function* getProjectList() {
  const data = yield fetchFunc(`/royal_api/projects/`, 'GET');
  console.log(data);
  yield put({
    type: profileActions.GET_PROJECT,
    data: data
  });
}

// /**
//  * 共用 fetch
//  * @param {*} url 
//  * @param {*} method 
//  */
// export function* fetchFunc(url, method) {
//   const data = yield call(
//     () => fetch(`${url}`, fetchHeader(`${method}`))
//       .then(response => response.json()),
//   );
//   return data
// }

export default function* profileSaga() {
  yield all([
    takeEvery(profileActions.FETCH_PROFILE_DATA_START, fetchProfileDataEffect),
    takeEvery(profileActions.GET_PROJECT_SAGA, getProjectList),
  ]);
}