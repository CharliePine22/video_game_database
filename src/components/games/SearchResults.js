import styles from './SearchResults.module.css';
import SearchResultsItem from './SearchResultsItem';

const SearchResults = (props) => {
  const results = props.data.results;
  // const searchTitle = props.data.next.split('=')[3];
  // console.log(props.data.next.split('=')[3]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles['results-container']}>
          <h1>Search Results</h1>
          <ul>
            {results.map(
              (game) =>
                game['background_image'] != null && (
                  <SearchResultsItem
                    game={game}
                    id={game.id}
                    key={game.id}
                    slug={game.slug}
                    name={game.name}
                    background_image={game.background_image}
                    released={game.released}
                  />
                )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
