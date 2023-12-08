require('dotenv').config()
const jwt = require('jsonwebtoken')
const { addLog } = require('../utils/logger')

const authenticateToken = (req, res, next) =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    const secretKey = process.env.ACCESS_TOKEN

    if(token == null){
        addLog("Unauthorizate")
        return res.sendStatus(401)
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          addLog("Unauthorizate")
          return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = decoded;
        next();
    });
}

module.exports = {authenticateToken: authenticateToken}