import Link from 'next/link';
import styles from './SearchResultsItem.module.css';
import { FaPlusCircle } from 'react-icons/fa';
import { useState } from 'react';

const SearchResultsItem = (props) => {
  const [loading, setLoading] = useState(false);
  const [quickAddStatus, setQuickAddStatus] = useState(false);
  const [message, setMessage] = useState('');

  const quickAddGameHandler = () => {
    setQuickAddStatus(true)
    const fetchApi = async () => {
      setLoading(true)
      try {
        const response = await fetch('/api/add-game', {
          method: 'POST',
          body: JSON.stringify(props.game),
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setMessage(data)
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchApi()
  }

  const buttonIcon = (!loading && !quickAddStatus) ? <FaPlusCircle className={styles.icon}/> : loading ? <div className={styles["lds-ring"]}><div></div><div></div><div></div><div></div></div> : (!loading && quickAddStatus && message.status == 'success') ? <p className={styles.success}>✔</p> : (!loading && quickAddStatus && message.status == 'failed') ? <p className={styles.failed}>X</p> : '';
  // const iconStatus = ()

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
            <div className={styles.actions}>
              <Link href={`/game_details/${props.slug}`}><a className={styles.details}>See Game Details</a></Link>
              <button onClick={quickAddGameHandler} className={styles['quick-add']}>{buttonIcon}</button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default SearchResultsItem;
