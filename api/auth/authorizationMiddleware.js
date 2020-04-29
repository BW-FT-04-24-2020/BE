const jwt = require('jsonwebtoken');
const jwtSecret = require('./secret');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        const secret = jwtSecret.jwtSecret;

        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: `invalid credentials` });
            } else {
                req.decodedJwt = decodedToken;
                next();
            }
        });
    } else {
        res.status(400).json({ message: `no credentials provided` });
    }
};