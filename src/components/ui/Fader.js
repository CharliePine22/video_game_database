import styles from './Fader.module.css'

const Fader = (props) => {
    return (
    <h1 className={styles.fade}>{props.text}</h1>
    )
}

export default Fader;