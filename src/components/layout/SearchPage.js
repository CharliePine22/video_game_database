import Searchbar from '../games/Searchbar';
import styles from './SearchPage.module.css';

const SearchPage = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.search}>
          <h1>Search</h1>
          <p>Please type in the name of the game that you would like to add.</p>
        </div>
        {/* <div className={styles.searchbar}>
          <Searchbar />
        </div> */}
      </div>
      <div className={styles.footer}>
        <img src='/assets/arcade.jpg' />
      </div>
    </>
  );
};

export default SearchPage;
