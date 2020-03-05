import profileActions from './actions';

const INITIAL_DATA = {
  data: null,
  loading: true,
  error: null,
  searchInput: '',
};
export default function profileReducer(state = INITIAL_DATA, action) {
  switch (action.type) {
    case profileActions.FETCH_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case profileActions.FETCH_PROFILE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case profileActions.SET_PROJECT_SEARCH:
      return {
        ...state,
        searchInput: action.payload
      };
    default:
      return state;
  }
}
