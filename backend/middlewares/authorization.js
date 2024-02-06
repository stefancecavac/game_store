const authorize = async(req, res, next) => {
    const user = req.user
    
    if (user.isAdmin) {
        next();
    } else {
        res.status(403).json({ error: 'forbidden' });
    }
};

module.exports = authorize;
