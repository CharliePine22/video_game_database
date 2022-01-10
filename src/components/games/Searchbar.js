import { useRef } from "react"
import styles from './Searchbar.module.css'

const Searchbar = () => {
    const gameSearch = useRef()

    const submitHandler = (event) => {
        event.preventDefault();
        const nameOfGame = gameSearch.current.value
        console.log(nameOfGame)
    }

    return <>
    <div className={styles.container}>
        <form onSubmit={submitHandler}>
            <input type="text" ref={gameSearch} />
        </form>
    </div>
    </>
}

export default Searchbar