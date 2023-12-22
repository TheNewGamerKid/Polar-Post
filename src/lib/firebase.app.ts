import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const config = {
  apiKey: "AIzaSyC2fxk12fMSOfs0YKEDNC48fx8-3xXrZdY",
  authDomain: "polar-post.firebaseapp.com",
  databaseURL: "https://polar-post-default-rtdb.firebaseio.com",
  projectId: "polar-post",
  storageBucket: "polar-post.appspot.com",
  messagingSenderId: "658725048482",
  appId: "1:658725048482:web:dce7aafbe9a7a6ca2a47fb",
  measurementId: "G-SKSZLKQHDT"
}

const firebaseApp = initializeApp(config)
const firebaseDB = getFirestore(firebaseApp)

export { config, firebaseApp, firebaseDB }