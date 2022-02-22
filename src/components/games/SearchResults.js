import styles from './SearchResults.module.css';
import SearchResultsItem from './SearchResultsItem';

const SearchResults = (props) => {
  const results = props.data.results;
  
  return (
    <>
      <div className={styles['results-container']}>
        <h1>Results</h1>
        <ul>
          {results.map((game) => (
            game['background_image'] != null &&
            <SearchResultsItem
              game={game}
              id={game.id}
              key={game.id}
              slug={game.slug}
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
