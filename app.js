const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv/config');


// process.env.DB_CONNECTION
// 'mongodb://localhost:27017/restApi'
//Connect to Database
mongoose.connect(
    process.env.DB_CONNECTION, { dbName: 'restApi', useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to db'));

//import routes
const postRoute = require('./routes/posts');
const userRoute = require('./routes/users');

//Middleware
app.use(bodyParser.json()); // Parse a data to every req made by client "NOTE: It should be declared at first because all routes are depend this"
app.use('/posts', postRoute);
app.use('/users', userRoute);


//Routes
app.get('/', (req, res) => {
    res.send('We are in home');
})

app.get('/posts', (req, res) => {
    res.send('We are in Posts');
})

app.listen(3000)