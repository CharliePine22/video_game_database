import { useContext } from 'react';
import SearchResults from '../../../src/components/games/SearchResults';
import ResultsContext from '../../../src/contexts/ResultsContext';

const SearchResultsPage = () => {
  const ctx = useContext(ResultsContext);
  const data = ctx.data.results;
  if(!data) {
      return <p>Fetching games...</p>
  }


  return (
    <>
      <SearchResults data={data} />
    </>
  );
};

export default SearchResultsPage;
