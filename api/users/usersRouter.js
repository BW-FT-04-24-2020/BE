const router = require('express').Router();

const Users = require('./usersModel');

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json({ success: true, users });
        })
        .catch(err => {
            res.status(500).json({ success: false, err });
        })
});

router.get('/:id/ailments', (req, res) => {
    Users.findUserAilment(req.params.id)
        .then(ailment => {
            res.status(200).json({ success: true, ailment });
        })
        .catch(err => {
            res.status(500).json({ success: false, err });
        })
});

module.exports = router;