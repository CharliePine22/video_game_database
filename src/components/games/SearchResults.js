import { useEffect } from 'react';
import styles from './SearchResults.module.css';
import SearchResultsItem from './SearchResultsItem';

const SearchResults = (props) => {
  const results = props.data;
  console.log(results)

  return (
    <>
      <div className={styles['results-container']}>
        <ul>
          {results.map((game) => (
            <SearchResultsItem
              id={game.id}
              name={game.name}
              background_image={game.background_image}
              released={game.released}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchResults;
