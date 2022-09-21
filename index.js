const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./.env')
const cors = require('cors');

app.use(cors());
app.use('/', require('./routes'))
require('dotenv').config();

connectDB();

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})











