const firebase = require("firebase/app")
require("firebase/database")

const firebaseConfig = {
  apiKey: "AIzaSyAsZX_GWlx0hkq0UJIXa-Nwxik6sVCczp0",
  authDomain: "siri-ad179.firebaseapp.com",
  databaseURL: "https://siri-ad179.firebaseio.com",
  projectId: "siri-ad179",
  storageBucket: "",
  messagingSenderId: "844505710758",
  appId: "1:844505710758:web:0de6a895fad6c12cb73467",
  measurementId: "G-4VJFRECFJM",
}
// Initialize Firebase the first time
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// Get a reference to the database service
const db = firebase.database()

module.exports = db
