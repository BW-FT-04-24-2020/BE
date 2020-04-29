const router = require('express').Router();

const Users = require('./usersModel');
const authorizeUser = require('../auth/authorizationMiddleware');

router.get('/', authorizeUser, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json({ success: true, users });
        })
        .catch(err => {
            res.status(500).json({ success: false, err });
        })
});

module.exports = router;