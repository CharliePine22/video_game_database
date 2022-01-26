import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './GameDetails.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import LoadingScreen from '../layout/LoadingScreen';

const GameDetails = (props) => {
  const game = props.game;
  const router = useRouter();
  const [gameSeriesList, setGameSeriesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const doorOpenIcon = <FontAwesomeIcon icon={faDoorOpen} />;
  const doorClosedIcon = <FontAwesomeIcon icon={faDoorClosed} />;

  useEffect(() => {
    // Fetch game series list after component renders
    const fetchGameSeries = async () => {
      const response = await fetch(
        `https://api.rawg.io/api/games/${game.id}/game-series?key=9554d3d0cc264b718b7840ee768f104b`
      );
      const data = await response.json();
      setGameSeriesList(data.results);
    };
    fetchGameSeries();
  }, [game.id]);

  const toggleFullDescription = () => {
    // Set toggle description to true/false depending on the current bool value
    setShowFullDescription(!showFullDescription);
  };

  const shortenDescription = (game) => {
    // Function to shorten game description
    // Works with toggleFullDescription function to display full description if user wants
    const cleanGame = game.description.replace(/<[^>]*>?/gm, '');
    const cleanedGame = cleanGame.replace(/&#39;/g, "'").trim();

    if (cleanedGame.length > 300 && showFullDescription == false) {
      return cleanedGame.split('').slice(0, 300).join('') + '...';
    } else {
      return cleanedGame;
    }
  };

  const addGameHandler = () => {
    // Add game details to MongoDB
    const fetchApi = async () => {
      try {
        const response = await fetch('/api/add-game', {
          method: 'POST',
          body: JSON.stringify(game),
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    setLoading(true);
    fetchApi();
  };

  // Show load screen until everything renders
  if (!gameSeriesList || gameSeriesList.length == 0) {
    return <h1>Fetching game details</h1>;
  }

  if (loading) {
    return (
      <>
          <LoadingScreen setLoading={setLoading}/>
      </>
    );
  }

  return (
    <div className={styles.container}>
      {/* Return user to search results page icon */}
      <div onClick={() => router.back()} className={styles.back}>
        <span className={styles['door-closed']}>{doorClosedIcon}</span>
        <span className={styles['door-open']}>{doorOpenIcon}</span>
      </div>
      <h1>{game.name}</h1>
      {/* Image container */}
      <div className={styles['image-container']}>
        <img src={game.background_image} />
        {/* Description container */}
        <div className={styles.description}>
          <h3>About</h3>
          <p>{shortenDescription(game)}</p>
          <button className={styles.toggle} onClick={toggleFullDescription}>
            {showFullDescription
              ? 'Hide Full Description'
              : 'Show Full Description'}
          </button>
        </div>
      </div>
      {/* Container holding all game info */}
      <div className={styles['game-info-container']}>
        <h2>Game Info</h2>
        {/* Game information start */}
        <div className={styles['game-info']}>
          {/* Game rating container */}
          <div className={styles.rating}>
            <h3 className={styles.headers}>Metacritic Rating</h3>
            <p>
              {game.metacritic != null ? game.metacritic : 'No rating details'}
            </p>
          </div>
          {/* Game release date container */}
          <div className={styles['release-date']}>
            <h3 className={styles.headers}>Release Date</h3>
            <p>{game.released}</p>
          </div>
          {/* Game playtime container */}
          <div className={styles.playtime}>
            <h3 className={styles.headers}>Avg Playtime</h3>
            <p>{game.playtime}</p>
          </div>
          {/* Game developers container */}
          <div className={styles.developers}>
            <h3 className={styles.headers}>Developers</h3>
            <ul>
              {/* If the developers list is empty, show the publishers list */}
              {game.developers.length != 0
                ? game.developers.map((game, index, arr) => (
                    <li>
                      {game.name} {index != arr.length - 1 ? '| ' : ''}
                    </li>
                  ))
                : game.publishers.map((game, index, arr) => (
                    <li>
                      {game.name} {index != arr.length - 1 ? '| ' : ''}
                    </li>
                  ))}
            </ul>
          </div>
          {/* Game platforms container */}
          <div className={styles.platforms}>
            <h3 className={styles.headers}>Platforms</h3>
            <ul>
              {game.platforms.map((p, index, arr) => (
                <span>
                  {p.platform.name} {index != arr.length - 1 ? '| ' : ''}
                </span>
              ))}
            </ul>
          </div>
        </div>
        {/* Other games in series container */}
        <div className={styles.series}>
          <h3 className={styles.headers}>Series Collection</h3>
          <ul className={styles['game-series']}>
            {gameSeriesList &&
              gameSeriesList.map((game) => (
                <Link href={`/game_details/${game.slug}`}>
                  <a className={styles['series-game']}>
                    {game.name} <br />
                  </a>
                </Link>
              ))}
          </ul>
        </div>
        {/* Grab user ratings and display them in a bar chart */}
        <div className={styles['user-ratings']}>
          <h3>User Ratings</h3>
          <p>Plan on putting a bar chart of user ratings</p>
        </div>
        <button className={styles.button} onClick={addGameHandler}>
          ADD GAME
        </button>
      </div>
    </div>
  );
};

export default GameDetails;
