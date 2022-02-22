import { useState } from 'react';
import styles from './AllGames.module.css';
import AllGamesItem from './AllGamesItem';
import { FaSteam } from 'react-icons/fa';
import SteamAuth from '../../ui/SteamAuth';

const AllGames = (props) => {
  // List by name or list my card
  // FILTER BY PLATFORM, COMPLETED, COMPLETED, PLAYING, BACKLOG,
  console.log(props.steamGames);
  const [filterView, setFilterView] = useState('');

  // MongoDB games
  const allGames = JSON.parse(props.all_games);
  // Sort games alphabetically
  const sortedGames = allGames.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  });

  return (
    <>
      <div className={styles.container}>
        <h1>All Games</h1>
        <div className={styles.card}>
          <div className={styles['filters-container']}>
            <h3>Filter Options</h3>
            <div className={styles['filter-actions']}>
              <button>Card View</button>
              <button>List View</button>
              <button>Filter By</button>
              <a href="/api/auth/steam">Login</a>
              <SteamAuth />
            </div>
          </div>
          <div className={styles['games-container']}>
            <h3 className={styles.title}>
              Library <FaSteam className={styles.icon} />
            </h3>
            <div className={styles.library}>
              {sortedGames.map((game) => (
                <AllGamesItem
                  key={game._id}
                  title={game.name}
                  image={game['background_image']}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGames;
