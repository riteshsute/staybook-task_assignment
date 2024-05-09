const admin = require("firebase-admin");
const firebaseSecrets = require("./firebaseConfig.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(firebaseSecrets),
});

// Access Firestore instance
const db = admin.firestore();

module.exports = db;
