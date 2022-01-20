import NavigationBar from './NavigationBar';
import CarouselItems from '../ui/Carousel';
import Fader from '../ui/Fader';
import styles from './Home.module.css';
import Typewriter from 'typewriter-effect';
import TickerBar from '../ui/TickerBar';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  return (
    <>
      <NavigationBar />
      <div className={styles.home}>
        <Fader text="Video Game Database" />
      </div>
      <div className={styles.container}>
        <img
          src="assets/vg_header.jpg"
          alt="A large collection of video games"
          className={styles['background-image']}
        />
      </div>
      <div className={styles.description}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                'An application to store your completed, currently playing, or wishlisted games. To start, add a new game to your list by pressing the button below!'
              )
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              // .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start();
          }}
        />
        <button><Link href='/search'>Add New Game</Link></button>
      </div>
      <div className={styles.games}>
        <CarouselItems />
      </div>
      <section className={styles.ticker}>
          <TickerBar />
      </section>
    </>
  );
};

export default Home;
