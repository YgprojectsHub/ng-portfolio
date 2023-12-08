require('dotenv').config()
const jwt = require('jsonwebtoken');

const secretKey =  process.env.ACCESS_TOKEN;

const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '1d' })
}

module.exports = {generateToken:generateToken}