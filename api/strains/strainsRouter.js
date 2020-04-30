const router = require('express').Router();

const Strains = require('./strainsModel');

router.get('/', (req, res) => {
    Strains.find()
        .then(strain => {
            res.status(200).json({ success: true, strain });
        })
        .catch(error => {
            res.status(500).json({ success: false, errorMessage: `internal issue ${error}` });
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params
    Strains.findById(id)
        .then(strain => {
            if (strain) {
                res.status(200).json({ success: true, strain });
            } else {
                res.status(404).json({ success: false, errorMessage: `strain not found` });
            }
        })
        .catch(error => {
            res.status(500).json({ success: false, errorMessage: `internal issue ${error}` });
        })
});

router.post('/', (req, res) => {
    const { strain_name, strain_type, strain_desc, effects, flavor} = req.body;
    const strain = { strain_name, strain_type, strain_desc };
    
    if (!strain_name || !strain_type) {
        res.status(400).json({ success: false, errormessage: 'please add name and type of new strain' });
    } else if ( !effects || !flavor) {
        res.status(400).json({ success: false, errormessage: 'please add effects and flavors new strain' });
    } else {
        let strain_id;
        Strains.add(strain)
            .then(strain_idArr => {
                strain_id = strain_idArr[0];
                const attribute = {effects, flavor, strain_id};
                return Strains.addAttribute(attribute)
                        .then(() => 
                            Strains.findById(strain_id)
                            .then(strain => {
                                res.status(201).json(strain);
                            })
                        );
            })
            .catch(err => {
                res.status(500).json({ success: false, errorMessage: `internal issue ${err}` });
            })
    }
})

// router.delete('/:id', (req, res) => {
//     const { id } = req.params
//     Strains.remove(id)
//         .then(count => {
//             if (count > 0) {
//                 res.status(200).json({ success: true, message: `Strain with id of ${id} has been removed`, id: id });
//             } else {
//                 res.status(404).json({ success: false, errorMessage: `Strain with ${id} could not be found` });
//             }
//     })
//     .catch(err => {
//         res.status(500)
//         .json({ error: 'failed to delete strain from db'})
//         })
// })

module.exports = router;