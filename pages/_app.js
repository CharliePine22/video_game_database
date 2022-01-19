import '../styles/globals.css'
import { ResultsProvider } from '../src/contexts/ResultsContext';
import NavigationBar from '../src/components/layout/NavigationBar';

function MyApp({ Component, pageProps }) {
  return <ResultsProvider><NavigationBar /><Component {...pageProps} /></ResultsProvider>
}

export default MyApp
