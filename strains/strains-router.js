const express = require('express');
const db = require('../auth/auth-model.js');
const authenticate = require('../auth/authenticate-middleware.js');

const router = express.Router();

router.get('/', authenticate, (req, res) => {
    const requestOptions = {
        headers: { accept: 'application/json' },
      }
    db.getStrains(requestOptions)
        .then(strains => {
                res.json(strains)
        });         
});

module.exports = router;
