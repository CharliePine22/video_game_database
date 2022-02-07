import { useState } from 'react';
import styles from './AllGames.module.css';
import AllGamesItem from './AllGamesItem';

const AllGames = (props) => {
  const [filterView, setFilterView] = useState('');
  const allGames = JSON.parse(props.all_games);
  console.log(allGames)

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
            </div>
          </div>
          <div className={styles['games-container']}>
            <h3>Library</h3>
            <div className={styles.library}>
              {allGames.map((game) => <AllGamesItem key={game._id} title={game.name} image={game['background_image']}/>)}


              <AllGamesItem games={allGames} />
              <AllGamesItem games={allGames} />
              <AllGamesItem games={allGames} />
              <AllGamesItem games={allGames} />
              <AllGamesItem games={allGames} />
              <AllGamesItem games={allGames} />
              <AllGamesItem games={allGames} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGames;
