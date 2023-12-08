const express = require('express')
const router = express.Router()
const { admin } = require('../config/firebaseAdmin');
var auth = require('../middleware/tokenControl')
const { getLinkData } = require('../utils/getData')
const { addLog } = require('../utils/logger')

const { v4: uuidv4 } = require('uuid');

const db = admin.firestore()

router.post("/add", async(req, res) => {
    try{
        const body = req.body

        const linkData = getLinkData(body.linkName, body.logo, body.toLink, body.desc, body.isActive)

        const randomId = uuidv4()

        await db.collection("side-links").doc(randomId).set(linkData).then(() => {
            res.status(200).send("Belge başarıyla eklendi")
        })
        .catch((err) => {
            addLog("link add error", err)
            res.status(500).send("Hata oluştu daha sonra tekrar deneyiniz")
        });
    }catch(err){
        addLog("link add error", err)
        res.status(500)
    }
})

router.patch("/update/:id", auth.authenticateToken, async(req, res) => {
    try{
        const body = req.body
        const id = req.params.id
        const skillData = getLinkData(body.linkName, body.logo, body.toLink, body.desc, body.isActive)
    
        await db.collection("side-links").doc(id).update(skillData)
        .then(() => {
            res.status(200).send("Belge başarıyla güncellendi")
        })
        .catch((err) => {
            addLog("link update error", err)
            res.status(500).send("Hata oluştu daha sonra tekrar deneyiniz")
        });
    }
    catch(err){
        addLog("link update error", err)
        res.status(500)
    }
})

router.get("/get", auth.authenticateToken, async(req, res) => {
    try{
        const linksRef = await db.collection("side-links").get()

        let responseArr = []

        linksRef.forEach(doc => {
            responseArr.push({ id: doc.id, data: doc.data() })
        })

        res.status(200).send(responseArr)
        
    }catch(err){
        addLog("link get error", err)
        res.status(500)
    }
})

router.delete("/delete/:id", auth.authenticateToken, async(req, res) => {
    try{
        const id = req.params.id
        await db.collection("side-links").doc(id).delete().then(() => {
            res.status(200).send("Belge başarıyla silindi")
        })
        .catch((err) => {
            addLog("link delete error", err)
            res.status(500).send("Hata oluştu daha sonra tekrar deneyiniz")
        });
        
    }catch(err){
        addLog("link delete error", err)
        res.status(500)
    }
})


module.exports = router