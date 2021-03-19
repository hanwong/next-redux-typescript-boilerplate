import Link from 'next/link'
import { NextPage } from 'next';
import Layout from '../components/Layout'
import { wrapper } from '../redux/store';

const IndexPage: NextPage = () => {
  
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
} 


export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
  console.log('index: ', store.getState());

});

export default IndexPage;
