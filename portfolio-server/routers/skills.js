const express = require('express')
const router = express.Router()

const { admin } = require('../config/firebaseAdmin');
var auth = require('../middleware/tokenControl')
const { v4: uuidv4 } = require('uuid');
const { getSkillData } = require('../utils/getData')
const { addLog } = require('../utils/logger')

const db = admin.firestore()

router.post("/add",async(req, res) => {
    try{
        const body = req.body
        const skillData = getSkillData(body.logo, body.percentValue, body.skillName, body.isActive, body.bgColor)
        console.log(skillData)
        const randomId = uuidv4()

        await db.collection("skills").doc(randomId).set(skillData).then(() => {
            res.status(200).send("Belge başarıyla eklendi")
        })
        .catch((err) => {
            addLog("skill add error", err)
            res.status(500).send("Hata oluştu daha sonra tekrar deneyiniz")
        });
    }catch(err){
        addLog("skill add error", err)
        res.status(500).send("Hata oluştu daha sonra tekrar deneyiniz")
    }
})

router.patch("/update/:id", auth.authenticateToken, async(req, res) => {
try{
    const body = req.body
    const id = req.params.id
    const skillData = getSkillData(body.logo, body.percentValue, body.percent, body.skillName, body.isActive)

    await db.collection("skills").doc(id).update(skillData)
    .then(() => {
        res.status(200).send("Belge başarıyla güncellendi")
    })
    .catch((err) => {
        res.status(500).send("Hata oluştu daha sonra tekrar deneyiniz")
        addLog("skill update error", err)
    });
}
catch(err){
    addLog("skill update error", err)
    res.status(500)
}
})

router.get("/get", auth.authenticateToken, async(req, res) => {
    try{
        const skillsRef = await db.collection("skills").get()

        let responseArr = []

        skillsRef.forEach(doc => {
            responseArr.push({ id: doc.id, data: doc.data() })
        })

        res.status(200).send(responseArr)
        
    }catch(err){
        addLog("skill get error", err)
        res.status(500)
    }
})

router.delete("/delete/:id", auth.authenticateToken, async(req, res) => {
    try{
        const id = req.params.id
        await db.collection("skills").doc(id).delete().then(() => {
            res.status(200).send("Belge başarıyla silindi")
        })
        .catch((err) => {
            addLog("skill delete error", err)
            res.status(500).send("Hata oluştu daha sonra tekrar deneyiniz")
        });
        
    }catch(err){
        addLog("skill delete error", err)
        res.status(500)
    }
})

module.exports = router