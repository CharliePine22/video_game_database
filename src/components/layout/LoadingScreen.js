import ProgressBar from '../ui/ProgressBar';
import styles from './LoadingScreen.module.css';
import { useState } from 'react';

const LoadingScreen = (props) => {
  const [finishedLoading, setFinishedLoading] = useState(false);

  const displayMessage = () => {
    setFinishedLoading(true);
  };

  const messageStyles = `${
    !finishedLoading ? styles.message : styles['message-loaded']
  }`;

  return (
    <>
      <div className={styles.page}>
        <h2 className={messageStyles}>
          {props.message.message}
        </h2>
        <div className={styles['loading-container']}>
          <ProgressBar
            displayMessage={displayMessage}
            setLoading={props.setLoading}
          />
        </div>
        <div className={styles['actions-container']}>
          {finishedLoading && <div className={styles.actions}>
            {finishedLoading && <button>Return to details</button>} {/* If game is already in database */}
            {finishedLoading && <button>Search new game</button>} {/* Either or */}
            {finishedLoading && <button>Try Again</button>} {/* If request fails */}
          </div> }
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
