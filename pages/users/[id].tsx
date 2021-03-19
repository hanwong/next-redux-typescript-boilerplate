import { END } from 'redux-saga';
import { useSelector } from 'react-redux';

import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import { wrapper } from '../../redux/store';
import { RootState } from '../../redux/reducers'
import { IAuthReducerState } from '../../redux/reducers/auth'
import { testOneRequestAction } from '../../redux/actions';


const StaticPropsDetail = () => {
  const {
    user
  } = useSelector<RootState, IAuthReducerState>((state) => state.auth);

  // if (error) {
  //   return (
  //     <Layout title="Error | Next.js + TypeScript Example">
  //       <p>
  //         <span style={{ color: 'red' }}>Error:</span> {error}
  //       </p>
  //     </Layout>
  //   )
  // }

  return (
    <Layout
      title={`${
        user ? user.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {user && <ListDetail item={user} />}
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({store, params}) => {
  store.dispatch(testOneRequestAction({id: Number(params?.id)}));
  store.dispatch(END);
  await store.sagaTask?.toPromise();
});

export default StaticPropsDetail
