const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  if (username !== 'Hana' || password !== 'admin123') {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = generateToken({ username });
  res.json({ token });
};

module.exports = {
  login
};
