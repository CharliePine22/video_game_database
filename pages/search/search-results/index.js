import { useContext } from 'react';
import SearchResults from '../../../src/components/games/SearchResults';
import ResultsContext from '../../../src/contexts/ResultsContext';
import NavigationBar from '../../../src/components/layout/NavigationBar';

const SearchResultsPage = () => {
  const ctx = useContext(ResultsContext);
  const data = ctx.data.results;
  if(!data) {
      return <p>Fetching games...</p>
  }


  return (
    <>
      <NavigationBar />
      <SearchResults data={data} />
    </>
  );
};

export default SearchResultsPage;
