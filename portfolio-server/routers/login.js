require('dotenv').config()
const express = require('express')
const router = express.Router()
const { addLog } = require('../utils/logger')

const {generateToken} = require('../utils/token')

router.post('/', (req, res) => {
  try{
  const { email, password } = req.body;

  if (email === process.env.EMAIL && password === process.env.PASSWORD) {
    const token = generateToken({ email })
    res.send(token);
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
    addLog("Unauthorizate")
  }    
  }catch(err){
    addLog("login / error")
  }

});

module.exports = router