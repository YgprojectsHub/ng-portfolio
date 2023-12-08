const express = require('express')
const router = express.Router()
const { admin } = require('../config/firebaseAdmin')
var auth = require('../middleware/tokenControl')
const { getContact } = require('../utils/getData')
const { addLog } = require('../utils/logger')

const db = admin.firestore()

router.patch("/update:id", auth.authenticateToken, async(req, res) => {
    try{
        const body = req.body
        const id = req.params.id
        const contactData = getContact(body.email, body.isActive)
    
        await db.collection("contact").doc(id).update(contactData)
        .then(() => {
            res.status(200).send("Belge başarıyla güncellendi")
        })
        .catch((err) => {
            addLog("contact add error", err)
            res.status(500).send("Hata oluştu daha sonra tekrar deneyiniz")
        });
    }
    catch(err){
        addLog("contact add error", err)
        res.status(500)
    }
})

router.get("/get", auth.authenticateToken, async(req, res) => {
    try{
        const contactRef = await db.collection("contact").get()

        let responseArr = []

        contactRef.forEach(doc => {
            responseArr.push({ id: doc.id, data: doc.data() })
        })

        res.status(200).send(responseArr)
        
    }catch(err){
        addLog("contact get error", err)
        res.status(500)
    }
})

module.exports = router