const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./auth-model.js');
const secrets = require('../data/secrets.js');
require("dotenv").config();
router.post('/register', (req,res) => {
    let user = req.body;
    const rounds = process.env.HASH_ROUTER;
    const hash = bcryptjs.hashSync(user.password, rounds);
    user.password = hash;

    Users.add(user).then(saved => {
        res.status(201).json(saved);

    }).catch(error =>{
        res.status(500).json({errormessage: error.message})
    })

})

router.post('/login', (req, res) => {
    let { email, password } = req.body;
  
    Users.findBy({email}).then(([user]) => {
        if(user && bcryptjs.compareSync(password, user.password)){
            const token = genToken(user);
            res.status(200).json({message: 'log in successful', token})
        } else {
            res.status(401).json({message: 'access denied'})
        }
    }).catch(error =>{
        res.status(500).json({errormessage: error.message})
    })
})
 

function genToken(user) {
    const payload = {
        user_Id: user.user_id,
        email: user.email
    };
    const secret = secrets.jwtSecret;
    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret, options)
}


module.exports = router;