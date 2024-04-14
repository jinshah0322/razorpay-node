require("dotenv").config();

const express = require('express');
const app = express(); // Use express() to create the app

const http = require('http').Server(app);

const paymentRoute = require('./routes/paymentRoute');

app.use('/',paymentRoute);

http.listen(3000, function(){
    console.log('Server is running');
});
