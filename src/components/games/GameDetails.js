import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './GameDetails.module.css';

const GameDetails = () => {
    const [game, setGame] = useState('')
    const router = useRouter();
    const gameName = router.query.keyword;
    const url =`https://api.rawg.io/api/games/${gameName}?key=c69737aae4e04ce8ad8613ba04c2be9f`

    useEffect(() => {
        const fetchGameData = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setGame(data)
            console.log(data)
            console.log(game)
        }
        fetchGameData()
    }, [gameName])

    if(!game || game.slug == undefined) {
        return <h1>Fetching game details</h1>
    }

    return <div className={styles.container}>
        <div className={styles['image-container']}>
            <img src={game.background_image}/>
        </div>
        <div className={styles['game-info']}>
            <h1>{game.name}</h1>
            <p>{game.description.replace(/<[^>]*>?/gm, '')}</p>
            <p>Platforms</p>
        </div>
    </div>
}

export default GameDetails;