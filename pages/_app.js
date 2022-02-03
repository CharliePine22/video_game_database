import '../styles/globals.css';
import NextNprogress from 'nextjs-progressbar';
import { ResultsProvider } from '../src/contexts/ResultsContext';
import NavigationBar from '../src/components/layout/navbar/NavigationBar';

// Router.events.on("routeChangeStart", progress.start);
// Router.events.on("routeChangeComplete", progress.finish);
// Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
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
