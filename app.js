const express = require('express');

const app = express();

const mongoose = require('mongoose');
require('dotenv/config');

//Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES

app.get('/', (req,res) => {
    res.send('We Are Home!!!Stopped at 10 min');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, ()=>{
    console.log('connected mdb');
});

app.listen(8000);