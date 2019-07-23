const express = require('express');

const app = express();

//ROUTES

app.get('/', (req,res) => {
    res.send('We Are Home!!!');
});

app.get('/posts', (req,res) => {
    res.send('We Are Posts!!!');
});

app.listen(8000);