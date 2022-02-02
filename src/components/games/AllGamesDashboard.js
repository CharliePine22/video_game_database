import styles from './AllGamesDashboard.module.css';

const AllGamesDashboard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Game Collection</h1>
          <div className={styles['image-container']}>
            <img src="/assets/sega-picture.jpg" />
          </div>
          <div className={styles['form-container']}>
            <form className={styles.form}>
              <input type="text" id="game-name" />
              <button>Search</button>
            </form>
          </div>
          <div className={styles.actions}>
            <button>View All Games</button>
            <button>View Backlog</button>
            <button>View Statistics</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGamesDashboard;
