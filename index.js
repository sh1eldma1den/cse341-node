const express = require('express');

const port = process.env.PORT || 3000;

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})
// require the use of the .env file with username and pw
require('dotenv').config();
const app = express();
const MongoClient = require('mongodb');

app.listen(port);

const cors = require('cors');

app.use(cors());

app.get('/contacts', async function(req, res){
    const uri = process.env.MONGO_URI.replace('dbname', 'cse341');

    const client = new MondoClient(uri);

    const dbo = client.db('cse341');

    const person = await dbo.collection('cse341').findOne();

    res.send(person);
})
if(err) throw err;

console.log('DB Connected Successfully');

