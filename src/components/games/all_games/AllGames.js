import styles from './AllGames.module.css';

const AllGames = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>All Games</h1>
        <div className={styles.card}>
          <div className={styles.filters}>
            <h3>View Options</h3>
            <div className={styles['filter-actions']}>
              <button>Card View</button>
              <button>List View</button>
              <button>Filter By</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGames;
