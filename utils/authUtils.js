// utils/authUtils.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

const saltRounds = 10;

const hashPassword = async (password) => {
  return bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

const generateToken = (payload) => {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  return jwt.verify(token, config.jwtSecret);
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
};
