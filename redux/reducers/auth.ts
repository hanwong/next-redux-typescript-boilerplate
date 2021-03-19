import { AnyAction } from "redux";
import produce from "immer";
import { IAuth } from '../../interfaces';
import {
  TEST_DATA_SUCCESS,
  TEST_DATA_FAILURE,
  TEST_ONE_DATA_SUCCESS,
  TEST_ONE_DATA_FAILURE,
} from '../actions';

export const initialState: IAuth = {
  isLoggedIn: false,
  userList: null,
  user: null,
  error: null
};

export type IAuthReducerState = typeof initialState;

const reducer = (
  state = initialState,
  action: AnyAction,
) => produce(state, (draft) => {
  switch (action.type) {
    case TEST_DATA_SUCCESS:
      draft.userList = action.data;
      break;
    case TEST_DATA_FAILURE:
      draft.error = action.error;
      break;
    case TEST_ONE_DATA_SUCCESS:
      draft.user = action.data;
      break;
    case TEST_ONE_DATA_FAILURE:
      draft.error = action.error;
      break;

    default:
      break;
  }
});

export type AuthState = typeof reducer;
export default reducer;