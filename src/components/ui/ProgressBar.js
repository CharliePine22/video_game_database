import styles from './ProgressBar.module.css';
import { useState, useEffect } from 'react';
import SlotsAnimation from './SlotsAnimation';

const ProgressBar = (props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let counter = 1;
    const interval = setInterval(() => {
      counter++;
      setProgress(counter);
      if (counter == 100) {
        props.displayMessage();
        // setTimeout(function() {props.setLoading(false)}, 3000);
        clearInterval(interval);
      }
    }, 100);
  }, []);

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: 'red',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  return (
    <>
      <SlotsAnimation progress={progress} />
      <div className={styles.container}>
        <div style={fillerStyles}>
          <span className={styles.label}>{`${progress}%`}</span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
