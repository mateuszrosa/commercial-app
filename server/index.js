const express = require('express');
const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const connectionString = process.env.NODE_DATABASE;


MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))

const app = express();
const port = 3500;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})