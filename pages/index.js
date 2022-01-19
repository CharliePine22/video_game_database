import Head from 'next/head';
import Home from '../src/components/layout/Home';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Video Game Database</title>
        <meta name="description" content="Browse, save, and share data on all of your favorite video games!" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
