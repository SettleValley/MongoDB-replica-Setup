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
                const supermarket = await db.collection("SuperMarket").create(req.body);
                res.status(201).json({success: true, data: supermarket});
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
    

    res.json(data)
}