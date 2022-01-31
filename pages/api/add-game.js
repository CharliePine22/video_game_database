import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const dataId = data.id
        const client = await MongoClient.connect('mongodb+srv://cpine22:knight21@cluster0.mqwzb.mongodb.net/video_games?retryWrites=true&w=majority')
        const db = client.db()
        const videoGamesCollection = db.collection('video games');
        const item = await videoGamesCollection.find({"id":dataId}).count() > 0;
        if(item) {
            // const result = await videoGamesCollection.insertOne(data);
            res.status(201).json({message: `${data.name} is already in your collection!`});
        } else{
           
            res.status(201).json({message: `${data.name} added successfully!`});
        }

        client.close()

        res.status(201).json({message: item});
    }

}

export default handler;