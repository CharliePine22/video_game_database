import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './AllGamesDashboard.module.css';
import { FaSearch } from 'react-icons/fa';

const AllGamesDashboard = () => {
  const [gameName, setGameName] = useState('');
  const router = useRouter();

  const allGamesPageHandler = () => {
    router.push('/games_dashboard/all_games');
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(gameName);
    setGameName('');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Game Collection</h1>
          <div className={styles['image-container']}>
            <img src='/assets/sega-picture.jpg' />
          </div>
          <div className={styles['form-container']}>
            <form className={styles.form} onSubmit={formSubmitHandler}>
              <input
                type='text'
                id='game-name'
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
              />
              <button>
                <FaSearch />
              </button>
            </form>
          </div>
          <div className={styles.actions}>
            <button onClick={allGamesPageHandler}>All Games</button>
            <div className={styles['actions-row']}>
              <button>Backlog</button>
              <button>Statistics</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGamesDashboard;
