import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const dataId = data.id
        const client = await MongoClient.connect('mongodb+srv://cpine22:knight21@cluster0.mqwzb.mongodb.net/video_games?retryWrites=true&w=majority')
        const db = client.db()
        const videoGamesCollection = db.collection('video games');
        const item = await videoGamesCollection.find({"id":dataId}).count() > 0;
        try {
            if (item) {
                res.status(201).json({message: `${data.name} is already in your collection!`});
            } else {
                const result = await videoGamesCollection.insertOne(data);
                res.status(201).json({message: `${data.name} added successfully!`});
            }
        } catch(err) {
            res.status(500).json({message: 'There was an error adding the game, please try again!'});
        }

        client.close()

    } else if (req.method == 'GET') {
      
    }

}

export default handler;