import { useRef, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import styles from './Searchbar.module.css';
import contextValue from '../../contexts/ResultsContext';

const Searchbar = () => {
  // Track entry of user input
  const gameSearch = useRef();
  // Set search results to an empty list to prevent loading errors
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const ctx = useContext(contextValue);

  const submitHandler = (event) => {
    event.preventDefault();
    let slug = gameSearch.current.value.split(' ').join('-').toLowerCase();
    // Format user input to match api formatting
    const url =`https://api.rawg.io/api/games?key=9554d3d0cc264b718b7840ee768f104b&search=${slug}`
    console.log(url)
    const fetchData = async () => {
      setLoading(true)
      // Fetch data and return a list of entries
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false)
      if (!loading && data) {
        ctx.setResultsData(data);
        console.log(data)
      }
    };
    fetchData();
    gameSearch.current.value = '';
    router.push({
      pathname: `/search/search-results`,
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
