import NavigationBar from './NavigationBar';
import CarouselItems from '../ui/Carousel';
import Fader from '../ui/Fader';
import styles from './HomePage.module.css';

const HomePage = (params) => {
  return (
    <>
      <NavigationBar />
      <div className={styles.home}>
        <Fader text="Video Game Database" />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('A database to store your completed, currently playing, or wishlisted games')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start();
          }}
        />
      </div>
      <div className={styles.container}>
          <img src='../../assets/vg_header.jpg'/>
      </div>
      <CarouselItems />
    </>
  );
};

export default HomePage;
