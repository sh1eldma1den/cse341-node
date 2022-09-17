const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
// require the use of the .env file with username and pw
require('dotenv').config();
const app = express();
// connect to mongodb
// mongoose.connect(`mongodb://${process.env.DB_NAME}:${process.env.DB_PASS}@ds241658.mlab.com:41658/test_db`,(err)=>{

// if(err) throw err;

// console.log('DB Connected Successfully');
// })



app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${PORT}`)
})