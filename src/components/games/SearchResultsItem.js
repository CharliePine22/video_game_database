import Link from 'next/link';
import styles from './SearchResultsItem.module.css';

const SearchResultsItem = (props) => {
  return (
    <>
    <li key={props.id} className={styles.item}>
      <div className={styles.container}>
        <div className={styles['image-container']}>
          <img src={props.background_image} />
        </div>
        <div className={styles['game-info']}>
          <h2>{props.name}</h2>
          <p>Release Date: {props.released}</p>
          <Link href={`/game_details/${props.slug}`}>See Game Details</Link>
        </div>
      </div>
      </li>
    </>
  );
};

export default SearchResultsItem;
