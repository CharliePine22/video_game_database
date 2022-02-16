import '../styles/globals.css';
import NextNprogress from 'nextjs-progressbar';
import { ResultsProvider } from '../src/contexts/ResultsContext';
import { UserProvider } from '@auth0/nextjs-auth0';
import NavigationBar from '../src/components/layout/navbar/NavigationBar';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
let test;

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    // Client-side-only code
    test = window.location.origin;
  }

  return (
    <>
      <UserProvider>
        <ResultsProvider>
          <NextNprogress color="#FF0000" />
          <NavigationBar />
          <Component {...pageProps} />
        </ResultsProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
