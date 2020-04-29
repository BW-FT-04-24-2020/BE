const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../auth/auth-model.js');
const secrets = require('../data/secrets.js');

router.get('/:id',  (req,res) => {
    const id = req.params.id;
    const requestOptions = {
        headers: { accept: 'application/json' },
      };
  try{
    Users.find(id, requestOptions).then(response => res.send(response));
  } catch{
    res.status(500).json({message: 'an error has occurred'})
  }
})

router.put('/:id', (req,res) => {
   
    try{
        const id = req.params.id;
        const user = Users.update(id, {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        });
        res.status(200).json(user)
    } catch {
        res.status(500).json({ message: 'an error has occurred'})
    }
})

router.delete('/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const deleteUser =  await Users.remove(id); 
        if (deleteUser) res.status(200).json({ message: "user deleted"})
    } catch{
        res.status(500).json({ message: 'an error has occurred'})
    }
})

module.exports = router;