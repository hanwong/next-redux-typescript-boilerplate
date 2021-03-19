import {
  TEST_ONE_DATA_REQUEST,
} from "../redux/actions";

// reducer - me
export interface IAuth {
  isLoggedIn: boolean;
  userList: IUser[] | null;
  user: IUser | null;
  error: null | Error;
}
export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// action
export interface ITestOneData {
  id: number;
}

// saga
export interface ITestOneDataSaga {
  type: typeof TEST_ONE_DATA_REQUEST;
  data: {
    id: number;
  }
}
