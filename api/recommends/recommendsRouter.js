const router = require('express').Router();

const Recommends = require('./recommendsModel');

router.get('/', (req, res) => {
    Recommends.find()
        .then(recs => {
            res.status(200).json(recs)
        })
        .catch(err => res.status(500).json({ error: `no strain recommended for that ailment yet, see: ${err}`}))
});

router.get('/u/:id', (req, res) => {
    Recommends.findByAilment(id)
        .then(u_ails => {
            res.status(200).json(u_ails)
        })
        .catch(err => res.status(500).json({ error: `no strain recommended for that ailment yet, see: ${err}`}))
});

router.get('/:id', (req, res) => {
    Recommends.findByStrain(id)
        .then(rec_strain => {
            res.status(200).json(rec_strain)
        })
        .catch(err => res.status(500).json({ error: `no strain recommended for that ailment yet, see: ${err}`}))
});

module.exports = router;