const router = require('express').Router();

const Ailments = require('./ailmentsModel');

router.get('/', (req, res) => {
    console.log(res);
    Ailments.find()
        .then(ailment => {
            res.status(200).json({ success: true, ailment });
        })
        .catch(err => {
            res.status(500).json({ success: false, err });
        })
});

router.post('/', (req, res) => {
    let newAilment = req.body;

    Ailments.add(newAilment)
        .then(ailment => {
            res.status(201).json({ success: true, message: `new ailment added, thank you`, ailment });
        })
        .catch(err => {
            res.status(500).json({ success: false, errorMessage: `unable to add the ailment data, please try again later`, err });
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Ailments.findById(id)
        .then(ailment => {
            if (ailment) {
                res.status(200).json({ success: true, ailment });
            } else {
                res.status(404).json({ success: false, errorMessage: `ailment not exist` });
            }
        })
        .catch(err => {
            res.status(500).json({ success: false, errorMessage: `unable to retrieve the data, try again later`, err });
        })
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Ailments.remove(id) 
        .then(count => {
            if (count) {
                res.status(200).json({ success: true, message: `ailment deleted` });
            } else {
                res.status(404).json({ success: false, errorMessage: `ailment already been deleted`});
            }
        })
        .catch(err => {
            res.status(500).json({ success: false, errorMessage: `unable to retrieve the data`, err });
        })
});

module.exports = router;