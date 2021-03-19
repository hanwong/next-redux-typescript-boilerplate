import Link from 'next/link'
import Layout from '../../components/Layout'
import List from '../../components/List'
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';

import { wrapper } from '../../redux/store';
import { testRequestAction } from '../../redux/actions';
import { RootState } from '../../redux/reducers'
import { IAuthReducerState } from '../../redux/reducers/auth'


const WithStaticProps = () => {
  const {
    userList
  } = useSelector<RootState, IAuthReducerState>((state) => state.auth);

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
      <List items={userList} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
} 

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  if (!store.getState().auth.userList) {
    store.dispatch(testRequestAction());
    store.dispatch(END);
  }
  await store.sagaTask?.toPromise();
});

export default WithStaticProps
