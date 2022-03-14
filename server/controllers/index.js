import {User} from '../models';

export const user = {
    login: async (req,res) => {
        let user = await User.findOne({ login: req.query.login }).select('+password');
        console.log(user)
        if (!user) {
            return res.status(404).json({ "message": "Wrong login!" });
        }
        const isPasswordValid = user.comparePassword(req.query.password);
        if (!isPasswordValid) {
            return res.status(404).json({ "message": "Wrong password!" });
        }
        console.log('Logged In!');
        user.password = undefined;
        res.json(user);
    },
    register: async (req,res) => {
        console.log(req.body);
        const user = new User(req.body);
        try {
            const newUser = user.save();
            res.json(newUser);
            console.log('Registerd new Account');
        } catch(e) {
            return res.status(404).json(e.errors);
        }
    }
}