import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {app} from './app';
import { router } from './routes';

dotenv.config();
const connectionString = process.env.NODE_DATABASE;

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
    app.use(router);

    mongoose.connect(connectionString, () => {
        console.log('Mongo DB is connected');
    })
})