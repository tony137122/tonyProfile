const profileActions = {
  FETCH_PROFILE_DATA_START: 'FETCH_PROFILE_DATA_START',
  FETCH_PROFILE_DATA_SUCCESS: 'FETCH_PROFILE_DATA_SUCCESS',
  FETCH_PROFILE_DATA_FAILURE: 'FETCH_PROFILE_DATA_FAILURE',
  SET_PROFILE_DATA: 'SET_PROFILE_DATA',
  SET_PROJECT_SEARCH: 'SET_PROJECT_SEARCH',
  GET_PROJECT_SAGA: 'GET_PROJECT_SAGA',
  GET_PROJECT: 'GET_PROJECT',
  fetchProfileDataStart: () => ({
    type: profileActions.FETCH_PROFILE_DATA_START,
  }),
  fetchProfileDataSuccess: profile => ({
    type: profileActions.FETCH_PROFILE_DATA_SUCCESS,
    payload: profile,
  }),
  fetchProfileDataFailure: error => ({
    type: profileActions.FETCH_PROFILE_DATA_FAILURE,
    payload: error,
  }),
  getProjectData: () => ({ type: profileActions.GET_PROJECT_SAGA }),
  setProjectSearch: searchInput => ({
    type: profileActions.SET_PROJECT_SEARCH,
    payload: searchInput,
  }),
};

export default profileActions;
