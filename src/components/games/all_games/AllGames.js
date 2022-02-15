import { useState } from 'react';
import styles from './AllGames.module.css';
import AllGamesItem from './AllGamesItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSteam } from '@fortawesome/free-solid-svg-icons';

const AllGames = (props) => {
  // List by name or list my card
  // FILTER BY PLATFORM, COMPLETED, COMPLETED, PLAYING, BACKLOG, 
  console.log(props.steamGames)
  const [filterView, setFilterView] = useState('');
  const allGames = JSON.parse(props.all_games);
  const steamIcon = <FontAwesomeIcon icon={faSteam}/>
  const sortedGames = allGames.sort(function(a, b) {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
  });

  return (
    <>
      <div className={styles.container}>
        <span><h1>All Games</h1>{steamIcon}</span>
        <div className={styles.card}>
          <div className={styles['filters-container']}>
            <h3>Filter Options</h3>
            <div className={styles['filter-actions']}>
              <button>Card View</button>
              <button>List View</button>
              <button>Filter By</button>
            </div>
          </div>
          <div className={styles['games-container']}>
            <h3>Library</h3>
            <div className={styles.library}>
              {sortedGames.map((game) => <AllGamesItem key={game._id} title={game.name} image={game['background_image']}/>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGames;
