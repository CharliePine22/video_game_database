import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './Searchbar.module.css';

const Searchbar = () => {
  const [errorMessage, setErrorMessage] = useState('');

  // Track entry of user input
  const gameSearch = useRef();

  // Set search results to an empty list to prevent loading errors
  const router = useRouter();
  const questionMark = <FontAwesomeIcon icon={faQuestionCircle} />;

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
                <p>Enter the name of game you&#39;d like to search below.</p>
              )}
              {errorMessage !== '' && (
                <p className={styles.error}>{errorMessage}</p>
              )}
            </div>
            <input type='text' ref={gameSearch} id='game-name' />
            <div className={styles.actions}>
              <button>Search</button>
              <div className={styles.random}>
                <button type='button'>Random Game</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
