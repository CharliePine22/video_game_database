import ProgressBar from '../ui/ProgressBar';
import styles from './LoadingScreen.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

const LoadingScreen = (props) => {
  const [finishedLoading, setFinishedLoading] = useState(false);
  const router = useRouter();
  
  const returnToGameDetailsHandler = () => {
    props.setLoading(false);
  }

  const returnToSearchPageHandler = () => {
    router.replace('/search');
  }

  const viewGameInCollectionHandler = () => {
    router.replace('/games_dashboard/all_games')
  }
  
  const displayMessage = () => {
    setFinishedLoading(true);
  };

  const messageStyles = `${
    !finishedLoading ? styles.message : styles['message-loaded']
  }`;

  return (
    <>
      <div className={styles.page}>
        <div className={styles.card}>
          <h2 className={messageStyles}>{finishedLoading && props.message.message}</h2>
          <div className={styles['loading-container']}>
            <ProgressBar
              displayMessage={displayMessage}
              setLoading={props.setLoading}
            />
          </div>
          <div className={styles['actions-container']}>
            {finishedLoading && (
              <div className={styles.actions}>
                {/* If game is already in database */}
                {finishedLoading && <button onClick={returnToGameDetailsHandler}>Return to details</button>}
                {/* Either or */}
                {finishedLoading && props.requestMethod == 'POST' && (
                  <button onClick={returnToSearchPageHandler}>Search new game</button>
                )}
                {/* After adding game */}
                {finishedLoading && <button onClick={viewGameInCollectionHandler}>View game in collection</button>}
                {/* If request fails */}
                {finishedLoading && props.requestMethod == 'GET' && <button>Try Again</button>}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
