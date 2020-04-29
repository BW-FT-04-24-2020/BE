const jwt = require('jsonwebtoken');
const jwtSecret = require('./secret');

module.exports = {
    getToken
};

function getToken(user) {
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
    
    const secret = jwtSecret.jwtSecret;

    // 3. build and sign the token
    return jwt.sign(payload, secret, options);
}