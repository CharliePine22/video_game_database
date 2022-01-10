import Typewriter from 'typewriter-effect';
import Searchbar from '../games/Searchbar';
import styles from './SearchPage.module.css';

const SearchPage = () => {
  return (
    <>
      <div className={styles.search}>
        <h1>Search</h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Enter the name of the game you would like to add')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start();
          }}
        />
      </div>
      <Searchbar />
    </>
  );
};
export default SearchPage;
