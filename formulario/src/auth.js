
var admin = require("firebase-admin");

var serviceAccount = require("./firestore.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bd-cidades-default-rtdb.firebaseio.com"
});
const db = admin.firestore()

module.exports = db