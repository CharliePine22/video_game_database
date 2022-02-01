import '../styles/globals.css';
import NextNprogress from 'nextjs-progressbar';
import { useState } from 'react';
import LoadingScreen from '../src/components/layout/LoadingScreen';
import Router from 'next/router';
import { ResultsProvider } from '../src/contexts/ResultsContext';
import NavigationBar from '../src/components/layout/NavigationBar';

// Router.events.on("routeChangeStart", progress.start);
// Router.events.on("routeChangeComplete", progress.finish);
// Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(false);
  // Router.events.on('routeChangeStart', (url) => {
  //   setLoading(true);
  // });
  // Router.events.on('routeChangeComplete', (url) => {
  //   setLoading(false);
  // });

  return (
    <>
      <ResultsProvider>
      <NextNprogress color='#FF0000'/>
        <NavigationBar />
        <Component {...pageProps} />
      </ResultsProvider>
    </>
  );
}

export default MyApp;
