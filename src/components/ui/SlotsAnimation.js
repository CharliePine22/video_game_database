import { useRef } from 'react';
import styles from './SlotsAnimation.module.css';

const SlotsAnimation = (props) => {
  const messageRef = useRef();
  
  const messages = [
    'Connecting to database...',
    'Collecting game data...',
    'Communcating request to server...',
    'Saving collection data...',
    'Closing connection to database...',
  ];

  if (props.progress == 25) {
    messageRef.current.style.top = '-40px';
  } else if (props.progress == 50) {
    messageRef.current.style.top = '-90px';
  } else if (props.progress == 75) {
    messageRef.current.style.top = '-140px';
  } else if (props.progress == 100) {
    messageRef.current.style.top = '-190px';
  }

  return (
    <div className={styles['slot-machine']}>
      <div className={styles.slot}>
        <section className={styles.section}>
          <div className={styles.container} ref={messageRef}>
            {messages.map((message, i) => (
              <div key={i}>
                <span>{message}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SlotsAnimation;
