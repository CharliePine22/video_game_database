import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './Searchbar.module.css';
import Typewriter from 'typewriter-effect';

const Searchbar = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [submitSearch, setSubmitSearch] = useState(false);

  // Track entry of user input
  const gameSearch = useRef();

  // Set search results to an empty list to prevent loading errors
  const router = useRouter();
  const questionMark = <FontAwesomeIcon icon={faQuestionCircle} />;

  // Submit game search handler
  const submitHandler = (event) => {
    event.preventDefault();
    let slug = gameSearch.current.value.split(' ').join('-').toLowerCase();
    if (slug == '') {
      setErrorMessage('Please enter a valid title.');
      return;
    }
    router.push({
      pathname: `/search/search-results/${slug}`,
    });
  };

  const coinStyles = submitSearch ? `coin ${styles.insert}` : styles.coin;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles['form-details']}>
              <label htmlFor='game-name'>
                <h1>Game Name</h1>
              </label>
              {!errorMessage && (
                <Typewriter
                  options={{
                    strings: 'Enter the name of the game to search below...',
                    autoStart: true,
                  }}
                />
                // <p>Enter the name of game you&#39;d like to search below.</p>
              )}
              {errorMessage !== '' && (
                <p className={styles.error}>{errorMessage}</p>
              )}
            </div>
            <div className={styles['input-container']}>
              <input type='text' ref={gameSearch} id='game-name' />
              <div
                className={styles.slot}
                onClick={() => setSubmitSearch(!submitSearch)}
              >
                <div className={styles.slot__left}>
                  <div className={coinStyles}>
                    <img src='assets/penny.png' alt='the front of a penny' />
                  </div>
                </div>
                <div className={styles.slot__right}>
                  <p>
                    25<span>&#162;</span>
                  </p>
                  <p>Insert Coin to Search</p>
                </div>
              </div>
            </div>
            {/* <div className={styles.actions}>
              <button>Search</button>
              <div className={styles.random}>
                <button type='button'>Random Game</button>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
