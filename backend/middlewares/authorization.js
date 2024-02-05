const authorize = async(req, res, next) => {


    if (req.user.isAdmin) {
        next();
    } else {
        res.status(403).json({ error: 'forbidden' });
    }
};

module.exports = authorize;
