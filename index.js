const express = require('express');
const app = express();
const cors = require('cors');
const mongodb = require('./db/connect');
const port = process.env.PORT || 8080;

app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
app.use('/', require('./routes'));
require('dotenv').config();

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log('Connected to the DB and lisening on ${port}');
    }
});











