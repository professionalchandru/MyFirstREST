const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const env = require('dotenv').config();
const postroute = require('./routes/posts')
const userroute = require('./routes/users')

//Connect to Database
mongoose.connect(
    process.env.DB_URI, { dbName: 'restApi', useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to db'));

//Middleware
app.use(bodyParser.json()); // Parse a data to every req made by client "NOTE: It should be declared at first because all routes are depend this"
app.use('/posts', postroute);
app.use('/users', userroute);


//Routes
app.get('/', (req, res) => {
    res.send('We are in home');
})

app.get('/posts', (req, res) => {
    res.send('We are in Posts');
})

app.listen(3000,()=>{
	console.log('listening in 3000')
})