const admin = require("firebase-admin");
const serviceAccount = require('./serviceAccountKey.json');

const initializeFirebase = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // Diğer yapılandırma seçenekleri
  });
};

module.exports = {
  initializeFirebase,
  admin 
};