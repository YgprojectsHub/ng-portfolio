require('dotenv').config()

function authControl(req, res, next){
    const body = req.body

    const id = process.env.EMAIL
    const password = process.env.PASSWORD

    if(id !== body.email || password !== body.password){
        next()
    }else{
        return res.sendStatus(403)
    }
}

module.exports = {authControl: authControl}