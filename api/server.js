const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
 const authRouter = require('../auth/auth-router.js');
 const userRouter = require('../user/user-router.js');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/user',authenticate,  userRouter);

server.get('/', (req,res) =>{
    res.json({ api: 'up'})
})
module.exports = server;

