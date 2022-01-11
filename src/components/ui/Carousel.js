import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Carousel.module.css';

const CarouselItems = () => {
    {/* Carousel showing top 3 favorite games OR current games being played/in backlog */}
    return <>
      <div className={styles.container}>
      <h1>Current Games</h1>
     <Carousel className={styles.carousel}>
     <Carousel.Item>
       <img
         className={styles['carousel_img']}
         src="https://wallpaperaccess.com/full/954546.jpg"
         alt="First slide"
       />
       <Carousel.Caption>
         <h3>Fav Video Game 1</h3>
         <p>This is my all time favorite game or the current game im playing.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className={styles['carousel_img']}
         src="https://image.api.playstation.com/cdn/UP0082/CUSA05933_00/Mcd5L82dShQ7n5zWfBVNKMAfPgl1kkSz.png"
         alt="Second slide"
       />

       <Carousel.Caption>
         <h3>Fav Video Game 2</h3>
         <p>This is my 2nd favorite game or the next game im playing.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className={styles['carousel_img']}
         src="https://images.alphacoders.com/789/thumb-1920-789452.jpg"
         alt="Third slide"
       />

       <Carousel.Caption>
         <h3>Fav Video Game 3</h3>
         <p>This is my 3rd favorite game or the 3rd game im playing.</p>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
   </div>
   </>
}

export default CarouselItems