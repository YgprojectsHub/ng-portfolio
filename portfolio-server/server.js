require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3100

const { initializeFirebase } = require('./config/firebaseAdmin');

initializeFirebase()

const skillsRoute = require("./routers/skills")
const otherskillsRoute = require("./routers/otherSkills")
const contactRoute = require("./routers/contact")
const sideLinksRoute = require("./routers/side-links")

const loginRoute = require("./routers/login")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', express.static('public'));

app.use('/sidelink',sideLinksRoute)
app.use('/skills', skillsRoute)
app.use('/otherSkills', otherskillsRoute)
app.use('/contact', contactRoute)
app.use('/login', loginRoute)

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})