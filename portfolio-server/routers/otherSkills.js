const express = require('express')
const router = express.Router()
const { admin } = require('../config/firebaseAdmin');
var auth = require('../middleware/tokenControl')
const { getOtherSkills } = require('../utils/getData')
const { addLog } = require('../utils/logger')

const { v4: uuidv4 } = require('uuid');

const db = admin.firestore()

router.post("/add", async(req, res) => {
    try{
        const body = req.body

        const skillData = getOtherSkills(body.skillName, body.logo, body.isActive)

        const randomId = uuidv4()

        await db.collection("other-skills").doc(randomId).set(skillData).then(() => {
            res.status(200).send("Belge başarıyla eklendi")
        })
        .catch((err) => {
            addLog("other-link add error", err)
            res.status(500).send("Hata oluştu daha sonra tekrar deneyiniz")
        });
    }catch(err){
        addLog("other-link add error", err)
        res.status(500)
    }
})

router.patch("/update/:id", auth.authenticateToken, async(req, res) => {
    try{
        const body = req.body
        const id = req.params.id
        const skillData = getOtherSkills(body.skillName, body.logo, body.isActive)
    
        await db.collection("other-skills").doc(id).update(skillData)
        .then(() => {
            res.status(200).send("Belge başarıyla güncellendi")
        })
        .catch((err) => {
            addLog("other-link update error", err)
            res.status(500).send("Hata oluştu daha sonra tekrar deneyiniz")
        });
    }
    catch(err){
        addLog("other-link update error", err)
        res.status(500)
    }
})

router.get("/get", auth.authenticateToken, async(req, res) => {
    try{
        const skillsRef = await db.collection("other-skills").get()

        let responseArr = []

        skillsRef.forEach(doc => {
            responseArr.push({ id: doc.id, data: doc.data() })
        })

        res.status(200).send(responseArr)
        
    }catch(err){
        addLog("other-link get error", err)
        res.status(500)
    }
})

router.delete("/delete/:id", auth.authenticateToken, async(req, res) => {
    try{
        const id = req.params.id
        await db.collection("other-skills").doc(id).delete()
        .then(() => {
            res.status(200).send("Belge başarıyla silindi")
        })
        .catch((err) => {
            addLog("other-link delete error", err)
            res.status(500).send("Hata oluştu daha sonra tekrar deneyiniz")
        });
        
    }catch(err){
        addLog("other-link delete error", err)
        res.status(500)
    }
})


module.exports = router