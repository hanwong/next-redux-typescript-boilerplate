import { all, call, put, fork, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { IUser, ITestOneDataSaga } from '../../interfaces';
import {
  TEST_DATA_REQUEST,
  TEST_DATA_SUCCESS,
  TEST_DATA_FAILURE,
  TEST_ONE_DATA_REQUEST,
  TEST_ONE_DATA_SUCCESS,
  TEST_ONE_DATA_FAILURE,
} from '../actions';

function* loadData() {
  try {
    const { status, data }: AxiosResponse<IUser[]> = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users`,
    );

    if (status === 200) {
      yield put({
        type: TEST_DATA_SUCCESS,
        data
      });
    }
  } catch (err) {
    yield put({
      type: TEST_DATA_FAILURE,
      error: err.response.data,
    });
  }
}

function* loadOneData(action: ITestOneDataSaga) {
  try {
    const { status, data }: AxiosResponse<IUser[]> = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users/${action.data.id}`,
    );

    if (status === 200) {
      yield put({
        type: TEST_ONE_DATA_SUCCESS,
        data
      });
    }
  } catch (err) {
    yield put({
      type: TEST_ONE_DATA_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadData() {
  yield takeLatest(TEST_DATA_REQUEST, loadData);
}

function* watchLoadOneData() {
  yield takeLatest(TEST_ONE_DATA_REQUEST, loadOneData);
}

export default function* authSaga() {
  yield all([
    fork(watchLoadData),
    fork(watchLoadOneData),
  ]);
}