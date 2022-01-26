import ProgressBar from '../ui/ProgressBar';
import styles from './LoadingScreen.module.css';

const LoadingScreen = (props) => {

  return (
    <div className={styles.page}>
      <div className={styles['loading-container']}>
        <ProgressBar setLoading={props.setLoading} />
      </div>
    </div>
  );
};

export default LoadingScreen;
