const jwt = require('jsonwebtoken')
const User = require('../models/userModel')


const authentication = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;

        if (!token) {
            return res.status(400).json({ error: 'authorization token required' });
        }

        const decodedToken = jwt.verify(token, process.env.SECRET);
        if (!decodedToken) {
            return res.status(400).json({ error: 'not a valid token' });
        }
        req.user = decodedToken
        next();
    } catch (error) {
        res.status(401).json({ error: 'not authorized' });
    }
};



module.exports = authentication