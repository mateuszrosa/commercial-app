import {User} from '../models';

export const user = {
    login: async (req,res) => {
        let user = await User.findOne({ login: req.query.login }).select('+password');
        console.log(user);
        if (!user) {
            return res.status(404).json({ "message": "Wrong login!" });
        }
        // const isPasswordValid = user.comparePassword(req.query.password);
        // if (!isPasswordValid) {
        //     return res.status(404).json({ "message": "Wrong password!" });
        // }
        console.log('Logged In!');
        user.password = undefined;
        res.json(user);
    }
}