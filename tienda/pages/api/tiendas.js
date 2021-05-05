import {connectToDatabase} from '../../util/mongodb';

export default async function handler(req, res){
    const {method} = req;
    const {db} = await connectToDatabase();

    switch(method){
        case 'GET':
            try {
                const data = await db.collection("SuperMarket").find({}).limit(6).toArray();
                res.status(200).json({success: true, data: data})
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        case 'POST':
            try {
                console.log(req.body);
                await db.collection("SuperMarket").insertOne(req.body)
                        .then(result =>{
                            console.log(`Successfully inserted item with _id: ${result}`)
                            res.status(201).json({success: true, data: result})
                        })
                        .catch(err => console.error(`Failed to insert item: ${err}`))

            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}