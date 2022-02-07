import styles from './AllGamesItem.module.css';

const AllGamesItem = (props) => {
    return <>
    <div className={styles.container}>
        <div className={styles['image-container']}>
            <h5 className={styles.title}>{props.title}</h5>
            <img src={props.image} />
        </div>
    </div>
    </>
}   

export default AllGamesItem;