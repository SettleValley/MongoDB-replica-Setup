import {connectToDatabase} from '../../../util/mongodb';

export default async function handler(req, res){
    const {
        query: { id },
        method
    } = req;
    const {db} = await connectToDatabase();
    switch(method){
        case 'GET':
            try {
                const doc = await db.collection('SuperMarket').findOne({"place_id": id})
                console.log(doc)
                res.json({success: true,data: doc})
            } catch (error) {
                res.status(400).json({success: false, error: error});
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
    
}