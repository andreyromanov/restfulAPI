const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');


require('dotenv/config');

//app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES

app.get('/', (req,res) => {
    res.send('We Are Home!!!stopped at 36 minute');
});

app.post('/get', (req,res) => {
	console.log(req);
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, ()=>{
    console.log('connected mdb');
});

app.listen(8000);