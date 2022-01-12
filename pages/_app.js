import '../styles/globals.css'
import { ResultsProvider } from '../src/contexts/ResultsContext'

function MyApp({ Component, pageProps }) {
  return <ResultsProvider><Component {...pageProps} /></ResultsProvider>
}

export default MyApp
