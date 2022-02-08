import styles from './AllGamesItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const AllGamesItem = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles['image-container']}>
          <h5 className={styles.title}>{props.title}</h5>
          <img src={props.image} />
          <div className={styles.edit}>
            <FontAwesomeIcon className={styles.button} icon={faEdit} />
          </div>
          <div className={styles.gradient}></div>
        </div>
      </div>
    </>
  );
};

export default AllGamesItem;
