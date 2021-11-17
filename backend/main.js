const express = require('express');
const logIn = require('./controllers/logInController');
const usersCollection = require('./controllers/usersCollectionController');
const permissions = require('./controllers/permissionsCollectionController');
const movies = require('./controllers/moviesController');
const members = require('./controllers/membersController');
var cors = require('cors');
const app = express();
require('./dataBase');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('isAlive', (a, b) => {
    b.status(200).send("alive1")
})
app.use('/api/login', logIn);
app.use('/api/users', usersCollection);
app.use('/api/movies', movies);
app.use('/api/members', members);
app.use('/api/permissions', permissions);

app.listen(8000);
