const bcrypt = require('bcryptjs');

const router = require('express').Router();

const Users = require('../users/usersModel');
const { getToken } = require('./getJsonWebToken');
const { validateUser } = require('./validateUser');

router.post('/register', (req, res) => {
    let newUser = req.body;
    const validateResult = validateUser(newUser);
    
    if (validateResult.success === true) {
        const hash = bcrypt.hashSync(newUser.password, 10);
        newUser.password = hash;
    
        Users.add(newUser)
            .then(user => {
                res.status(201).json({ success: true, message: `user has successfully registered`, user });
            })
            .catch(error => {
                res.status(500).json({ success: false, errorMessage: `uable to register the user, please try again later`, error });
            })
    } else {
        res.status(400).json({ success: false, errorMessage: `invalid information provided for the user, please check the errors`, errors: validateResult.errors });
    }
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            console.log(user);
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = getToken(user);
                res.status(200).json({ message: `Welcome ${user.username}!`, token });
            } else {
                res.status(401).json({ success: false, errorMessage: `invalid credentials, please check your password` });
            }
        })
        .catch(error => {
            res.status(500).json({ success: false, errorMessage: `server down, unable to retrieve data provided`, error });
        })
});

// function getToken(username) {
//     const payload = {
//         username,
//         role: "student" 
//     };

//     const secret = process.env.JWT_SECRET || "is it secret?";

//     const options = {
//         expiresIn: "1d"
//     };

//     return jwt.sign(payload, secret, options);
// }



module.exports = router;
