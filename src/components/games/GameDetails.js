import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './GameDetails.module.css';

const GameDetails = () => {
  const [game, setGame] = useState('');
  const [gameSeriesList, setGameSeriesList] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const router = useRouter();
  const gameName = router.query.keyword;
  const url = `https://api.rawg.io/api/games/${gameName}?key=9554d3d0cc264b718b7840ee768f104b`;

  useEffect(() => {
    const fetchGameData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setGame(data);
    };
    fetchGameData();
    
  }, [gameName]);

  useEffect(() => {
    const fetchGameSeries = async () => {
        const response = await fetch(
          `https://api.rawg.io/api/games/${game.id}/game-series?key=9554d3d0cc264b718b7840ee768f104b`
        );
        const data = await response.json();
        setGameSeriesList(data.results);
      };
      fetchGameSeries();
  }, [game.id])

  const toggleFullDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortenDescription = (game) => {
    const cleanGame = game.description.replace(/<[^>]*>?/gm, '');
    const cleanedGame = cleanGame.replace(/&#39;/g, "'").trim();

    if (cleanedGame.length > 300 && showFullDescription == false) {
      return cleanedGame.split('').slice(0, 300).join('') + '...';
    } else {
      return cleanedGame;
    }
  };

  if (
    !game ||
    game.slug == undefined ||
    !gameSeriesList ||
    gameSeriesList.length == 0
  ) {
    return <h1>Fetching game details</h1>;
  }

  return (
    <div className={styles.container}>
      <h1>{game.name}</h1>
      <div className={styles['image-container']}>
        <img src={game.background_image} />
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
      <div className={styles['game-info-container']}>
        <h2>Game Info</h2>
        <div className={styles['game-info']}>
          <div className={styles.platforms}>
            <h3>Platforms</h3>
            <ul>
              {game.platforms.map((p) => (
                <li>{p.platform.name}</li>
              ))}
            </ul>
          </div>
          <div className={styles.series}>
          <h3>Series Collection</h3>
          <ul className={styles['game-series']}>
            {gameSeriesList &&
              gameSeriesList.map((game) => <li>{game.name}</li>)}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
