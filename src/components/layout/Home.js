import CarouselItems from '../ui/Carousel';
import Fader from '../ui/Fader';
import styles from './Home.module.css';
import Typewriter from 'typewriter-effect';
import TickerBar from '../ui/TickerBar';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.home}>
            <Fader text='Video Game Database' />
          </div>
          <div className={styles['image-container']}>
            <img
              src='assets/vg_header.jpg'
              alt='A large collection of video games'
              className={styles['background-image']}
            />
          </div>
          <div className={styles.description}>
            {/* <p>
              An application to store your completed, currently playing, or
              wishlisted games. To start, add a new game to your list by
              pressing the button below!
            </p> */}
            <Link className={styles.button} href='/search'>
              Add New Game
            </Link>
            <Link className={styles.button} href='/games_dashboard'>
              My Collection
            </Link>
          </div>
          {/* <div className={styles.games}>
        <CarouselItems />
      </div> */}
          {/* <section className={styles.ticker}>
            <TickerBar />
          </section> */}
        </div>
      </div>
    </>
  );
};

export default Home;
