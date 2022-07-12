import Searchbar from '../games/Searchbar';
import styles from './SearchPage.module.css';

const SearchPage = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.search}>
          <div className={styles.searchbar}>
            <Searchbar />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <img src='/assets/arcade.jpg' />
      </div>
    </>
  );
};

export default SearchPage;
