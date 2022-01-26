import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        console.log(data.id)
        const client = await MongoClient.connect('mongodb+srv://cpine22:knight21@cluster0.mqwzb.mongodb.net/video_games?retryWrites=true&w=majority')
        const db = client.db()
        const videoGamesCollection = db.collection('video games');
        const item = db.videoGamesCollection.find({"id":data.id}).count() > 0;
        if(item) {
        console.log(item.id)
        } else {
        console.log('NOT EXISTS')
        }

        // const result = await videoGamesCollection.insertOne(data);

        // console.log(result);
        client.close()

        res.status(201).json({message: item});
    }

}

export default handler;