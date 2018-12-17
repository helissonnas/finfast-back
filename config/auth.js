const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const User = require('../src/user/user.model');

exports.auth = (req, res, next) =>{
    const token = req.cookies.access_token;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized, request token.' });
    }

    jwt.verify(token, authConfig.secret, (error, userData) => {
        if (error) return res.status(422).json({ error });
        req.userId = userData.id;
        next();
    });
};


