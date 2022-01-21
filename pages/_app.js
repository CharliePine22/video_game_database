import '../styles/globals.css';
import Router from "next/router";
import { ResultsProvider } from '../src/contexts/ResultsContext';
import NavigationBar from '../src/components/layout/NavigationBar';

// Router.events.on("routeChangeStart", progress.start);
// Router.events.on("routeChangeComplete", progress.finish);
// Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <ResultsProvider><NavigationBar /><Component {...pageProps} /></ResultsProvider>
}

export default MyApp
