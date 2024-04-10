const jwt = require('jsonwebtoken');
const { promisify } = require('util');


const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token is required 😁' });
    }
    try {
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        //  const decoded = await promisify(jwt.verify)
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token????' });
    }
};

module.exports = {
    verifyToken
};
