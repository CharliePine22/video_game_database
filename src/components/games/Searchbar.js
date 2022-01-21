import { useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './Searchbar.module.css';


const Searchbar = () => {
  // Track entry of user input
  const gameSearch = useRef();
  // Set search results to an empty list to prevent loading errors
  const router = useRouter();

  const submitHandler = (event) => {
    event.preventDefault();
    let slug = gameSearch.current.value.split(' ').join('-').toLowerCase();
    router.push({
      pathname: `/search/search-results/${slug}`,
    })
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <form onSubmit={submitHandler}>
            <label htmlFor="game-name">Name of Game</label>
            <input type="text" ref={gameSearch} id="game-name" />
            <button>Search</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
