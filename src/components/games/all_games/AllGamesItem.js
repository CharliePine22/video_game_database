import styles from './AllGamesItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Carousel from '../../ui/Carousel';

const AllGamesItem = (props) => {
  const [gameScreenShots, setGameScreenShots] = useState([]);

  // Grab game screenshots for slideshow
  useEffect(() => {
    const fetchGameScreenshots = async () => {
      const response = await fetch(
        `https://api.rawg.io/api/games/${props.key}/screenshots?key=9554d3d0cc264b718b7840ee768f104b`
      );
      const data = await response.json();
      setGameScreenShots(data);
    };
    fetchGameScreenshots();
  }, [props.key]);

  // console.log(gameScreenShots);

  return (
    <>
      <div className={styles.container}>
        <div className={styles['image-container']}>
          <div className={styles.gradient} />
          <div className={styles.screenshots}></div>
          <h5 className={styles.title}>{props.title}</h5>
          <img src={props.image} />
          <div className={styles.edit}>
            <FontAwesomeIcon className={styles.button} icon={faEdit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGamesItem;
