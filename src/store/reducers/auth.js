import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  loading: false,
  error: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        userId: action.userId,
        token: action.token,
        error: null,
        loading: false,
      }
    default:
      return state;
  }
}

export default reducer;