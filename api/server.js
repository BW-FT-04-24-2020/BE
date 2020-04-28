const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// routes import
const usersRouter = require('./users/usersRouter');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World!!! Server up and running!!!');
});
server.use('/api/users', usersRouter);

module.exports = server;