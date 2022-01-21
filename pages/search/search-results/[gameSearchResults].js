import SearchResults from '../../../src/components/games/SearchResults';

const SearchResultsPage = ({ games }) => {

  return (
    <>
      <SearchResults data={games} />
    </>
  );
};

export async function getStaticProps(context) {
  // Call an external API endpoint to get games.
  // You can use any data fetching library
  const game = context.params.gameSearchResults;
  const response = await fetch(`https://api.rawg.io/api/games?key=9554d3d0cc264b718b7840ee768f104b&search=${game}`);
  const games = await response.json();


  // By returning { props: { games } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      games,
    },
  }
}

export async function getStaticPaths() {
  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export default SearchResultsPage;
