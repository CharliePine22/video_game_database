import { useRef } from "react"
import styles from './Searchbar.module.css'

const Searchbar = () => {
    const gameSearch = useRef()

    const submitHandler = (event) => {
        event.preventDefault();
        const nameOfGame = gameSearch.current.value.split(' ').join('-').toLowerCase()
        alert(nameOfGame)
    }

    return <>
    <div className={styles.container}>
        <form onSubmit={submitHandler}>
            <label htmlFor='game-name'>Name of Game</label>
            <input type="text" ref={gameSearch} id='game-name'/>
        </form>
    </div>
    </>
}

export default Searchbar