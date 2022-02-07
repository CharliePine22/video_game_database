import AllGames from '../../../src/components/games/all_games/AllGames';
import { MongoClient } from 'mongodb';

const AllGamesPage = ( { allGames } ) => {
    return <h1>
        <AllGames all_games={allGames} />
    </h1>
}

export async function getServerSideProps(context) {
    const client = await MongoClient.connect('mongodb+srv://cpine22:knight21@cluster0.mqwzb.mongodb.net/video_games?retryWrites=true&w=majority')
    const db = client.db()
    const videoGamesCollection = db.collection('video games');
    const all_games = await videoGamesCollection.find().toArray();
    const result = JSON.stringify(all_games)
    client.close()

    return {
      props: {
        allGames: result
      },
    };
  }

export default AllGamesPage;