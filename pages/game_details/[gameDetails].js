import GameDetails from '../../src/components/games/GameDetails';
const GameDetailsPage = ({ gameDetails }) => {
  return (
    <div>
      <GameDetails game={gameDetails}/>
    </div>
  );
};

export async function getStaticProps(context) {
  // Call an external API endpoint to get games.
  // You can use any data fetching library
  const gameName = context.params.gameDetails;
  const response = await fetch(`https://api.rawg.io/api/games/${gameName}?key=9554d3d0cc264b718b7840ee768f104b`
  );
  const gameDetails = await response.json();

  // By returning { props: { games } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      gameDetails,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
}

export default GameDetailsPage;
