import '../styles/globals.css';
import NextNprogress from 'nextjs-progressbar';
import { ResultsProvider } from '../src/contexts/ResultsContext';
import NavigationBar from '../src/components/layout/navbar/NavigationBar';

function MyApp({ Component, pageProps }) {
  let test;
  if (typeof window !== 'undefined') {
    // Client-side-only code
    test = window.location.origin;
  }

  return (
    <>
        <ResultsProvider>
          <NextNprogress color='#FF0000' />
          <NavigationBar />
          <Component {...pageProps} />
        </ResultsProvider>
    </>
  );
}

export default MyApp;
