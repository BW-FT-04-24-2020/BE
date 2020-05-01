const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authorizeUser = require('../api/auth/authorizationMiddleware');

// routes import
const authRouter = require('./auth/authRouter');
const usersRouter = require('./users/usersRouter');
const ailmentsRouter = require('../api/ailments/ailmentsRouter');
const strainsRouter = require('../api/strains/strainsRouter');
const recommendsRouter = require('./recommends/recommendsRouter');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World!!! Server up and running!!!');
});

server.use('/api/auth', authRouter);
server.use('/api/users', authorizeUser, usersRouter);
server.use('/api/ailments', authorizeUser, ailmentsRouter);
server.use('/api/strains', authorizeUser, strainsRouter);
server.use('/api/recommends',authorizeUser, recommendsRouter);

module.exports = server;