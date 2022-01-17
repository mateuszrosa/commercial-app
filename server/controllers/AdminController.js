import {Bike} from '../models';

export const admin = {
    fetchBikes : async (req, res) => {
        try {
            const bikes = await Bike
                .find()
            if(!bikes) {
                res.status(404).json({"message": "Cannot find bikes"});
            } else {
                res.json(bikes)
            }
        } catch(e) {
            res.sendStatus(500);
        }
    }
}