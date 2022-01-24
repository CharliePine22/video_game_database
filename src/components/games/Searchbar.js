import { useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './Searchbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Searchbar = () => {
  // Track entry of user input
  const gameSearch = useRef();
  // Set search results to an empty list to prevent loading errors
  const router = useRouter();
  const questionMark = <FontAwesomeIcon icon={faQuestionCircle} />;

  const submitHandler = (event) => {
    event.preventDefault();
    let slug = gameSearch.current.value.split(' ').join('-').toLowerCase();
    router.push({
      pathname: `/search/search-results/${slug}`,
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <form onSubmit={submitHandler}>
            <label htmlFor="game-name">Game Name</label>
            <input type="text" ref={gameSearch} id="game-name" />
            <button>Search</button>
            <div className={styles.random}>
              <button type="button">Random Game</button>
              <p>{questionMark}</p>
              <div className={styles.tooltip}>
                <p className={styles['tooltip-message']}>
                  Click this button to find a search for a random game!
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
