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
    editUser: async (req,res) => {
        const {login, firstName, lastName, address1, email, city, zip, country, subdivision} = req.query;
        try {
            const user = await User
                .findOneAndUpdate(
                    {login},
                    {$set: {
                        "firstName": firstName,
                        "lastName": lastName,
                        "address1": address1,
                        "email": email,
                        "city": city,
                        "zip": zip,
                    }},
                    { returnOriginal: false, upsert: true }
                )
                if(!user) {
                    res.status(404).json("Cannot find user to edit");
                } else {
                    res.json(user);
                }
        } catch (e) {
            res.sendStatus(500)
        }
    },
    register: async (req,res) => {
        const user = new User(req.body);
        try {
            const newUser = await user.save();
            res.json(newUser);
            console.log('Registered new Account');
        } catch(e) {
            return res.status(404).json(e.errors);
        }
    },
    order: async (req, res) => {
        const {data, login} = req.body;
        try {
            const user = await User
            .findOneAndUpdate(
                {login},
                {$set: {
                    "orders": data
                }},
                { returnOriginal: false, upsert: true }
            )
            if(!user) {
                res.status(404).json("Cannot find user to edit");
            } else {
                res.json(user);
            }
        } catch(err) {
            res.sendStatus(500)
        }
    }
}