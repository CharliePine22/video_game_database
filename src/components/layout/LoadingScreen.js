import ProgressBar from '../ui/ProgressBar';
import styles from './LoadingScreen.module.css';

const LoadingScreen = () => {
    return <div className={styles.page}>
        <h1>Loading...</h1>
        <ProgressBar />
    </div>
};

export default LoadingScreen;
