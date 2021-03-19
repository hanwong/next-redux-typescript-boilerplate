import { ITestOneData } from '../../interfaces';

export const TEST_DATA_REQUEST = "TEST_DATA_REQUEST" as const;
export const TEST_DATA_SUCCESS = "TEST_DATA_SUCCESS" as const;
export const TEST_DATA_FAILURE = "TEST_DATA_FAILURE" as const;

export const TEST_ONE_DATA_REQUEST = "TEST_ONE_DATA_REQUEST" as const;
export const TEST_ONE_DATA_SUCCESS = "TEST_ONE_DATA_SUCCESS" as const;
export const TEST_ONE_DATA_FAILURE = "TEST_ONE_DATA_FAILURE" as const;

export const testRequestAction = () => ({
  type: TEST_DATA_REQUEST,
});

export const testOneRequestAction = (data: ITestOneData) => ({
  type: TEST_ONE_DATA_REQUEST,
  data,
});
