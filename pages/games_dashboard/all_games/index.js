import AllGames from '../../../src/components/games/all_games/AllGames';
import { MongoClient } from 'mongodb';

const AllGamesPage = ({ allGames, steamGames }) => {
  return (
    <h1>
      <AllGames all_games={allGames} steamGames={steamGames} />
    </h1>
  );
};

export async function getServerSideProps() {
  // Connect to MongoDB
  // const client = await MongoClient.connect(
  //   `mongodb+srv://${process.env.NEXT_PUBLIC_MONGDODB_USER}:${process.env.NEXT_PUBLIC_MONGDODB_USER}@cluster0.mqwzb.mongodb.net/video_games?retryWrites=true&w=majority`
  // );
  const client = await MongoClient.connect(
    `mongodb+srv://cpine22:knight21@cluster0.mqwzb.mongodb.net/video_games?retryWrites=true&w=majority`
  );
  const db = client.db();
  const videoGamesCollection = db.collection('video games');
  const all_games = await videoGamesCollection.find().toArray();
  const mongoGames = JSON.stringify(all_games);
  client.close();

  // Connect to SteamAPI
  const steamApiKey = '8839A59814836728B44373C745B88CC2';
  const cjSteamId = '76561198271438610';
  const steamClient = await fetch(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${steamApiKey}&steamid=${cjSteamId}&include_appinfo=True`
  );
  const steamLibrary = await steamClient.json();

  return {
    props: {
      allGames: mongoGames,
      steamGames: steamLibrary,
    },
  };
}

export default AllGamesPage;
