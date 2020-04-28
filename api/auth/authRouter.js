const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = require('express').Router();

const Users = require('../users/usersModel');

router.post('/register', (req, res) => {
    let newUser = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
    
    Users.add(newUser)
        .then(user => {
            res.status(201).json({ success: true, message: `user has successfully registered`, newUser, user });
        })
        .catch(error => {
            res.status(500).json({ success: false, errorMessage: `uable to register the user, please try again later`, error });
        })
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                // make a token
                // 1. decide a payload
                const payload = {
                    sub: user.id,
                    username: user.username,
                    roles: ['student']
                };
                // 2. decide confif (how long token get expired)
                const options = {
                    expiresIn: '1 days'
                };
                // 3. build & sign the token
                const token = jwt.sign(
                    payload,
                    process.env.JWT_SECRET || 'secret',
                    options
                );

                res.status(200).json({ success: true, message: 'here is your token', token });
            } else {
                res.status(401).json({ success: false, errorMessage: `invalid credentials, please check your password` });
            }
        })
        .catch(error => {
            res.status(500).json({ success: false, errorMessage: `server down, unable to retrieve data provided`, error });
        })
});



module.exports = router;
