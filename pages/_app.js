import '../styles/globals.css';
import NextNprogress from 'nextjs-progressbar';
import { ResultsProvider } from '../src/contexts/ResultsContext';
import { UserProvider } from '@auth0/nextjs-auth0';
import NavigationBar from '../src/components/layout/navbar/NavigationBar';

function MyApp({ Component, pageProps }) {
  let test;
  if (typeof window !== 'undefined') {
    // Client-side-only code
    test = window.location.origin;
  }

  return (
    <>
      <UserProvider>
        <ResultsProvider>
          <NextNprogress color='#FF0000' />
          <NavigationBar />
          <Component {...pageProps} />
        </ResultsProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
