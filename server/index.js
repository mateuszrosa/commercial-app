const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectionString = process.env.NODE_DATABASE;

const app = express();
const port = 3500;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`);

    mongoose.connect(process.env.NODE_DATABASE, () => {
        console.log('Mongo DB is connected');
    })
})