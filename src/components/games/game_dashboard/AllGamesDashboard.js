import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './AllGamesDashboard.module.css';

const AllGamesDashboard = () => {
  const [gameName, setGameName] = useState("");
  const router = useRouter();

  const allGamesPageHandler = () => {
    router.push('/games_dashboard/all_games')
  }
  
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(gameName);
    setGameName("");
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Game Collection</h1>
          <div className={styles['image-container']}>
            <img src="/assets/sega-picture.jpg" />
          </div>
          <div className={styles['form-container']}>
            <form onSubmit={formSubmitHandler}>
              <div className={styles.form}>
                <input type="text" id="game-name" value={gameName} onChange={e => setGameName(e.target.value)}/>
                <button>Search</button>
              </div>
            </form>
          </div>
          <div className={styles.actions}>
            <button onClick={allGamesPageHandler}>View All Games</button>
            <button>View Backlog</button>
            <button>View Statistics</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGamesDashboard;
