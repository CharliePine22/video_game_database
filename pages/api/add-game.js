import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const client = await MongoClient.connect('mongodb+srv://cpine22:knight21@cluster0.mqwzb.mongodb.net/video_games?retryWrites=true&w=majority')
        const db = client.db()

        const videoGamesCollection = db.collection('video games');
        const result = await videoGamesCollection.insertOne(data);

        console.log(result);
        client.close()

        res.status(201).json({message: 'Video Game Added!'});
    }

}

export default handler;