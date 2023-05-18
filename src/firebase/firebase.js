import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyB3dQIAEn4D3FPNkHBSYT6vYsBZHTUSxG8",
    authDomain: "clon-39b76.firebaseapp.com",
    projectId: "clon-39b76",
    storageBucket: "clon-39b76.appspot.com",
    messagingSenderId: "392688956036",
    appId: "1:392688956036:web:5b274d76e2e0fb409808d1"
    
  };


const app = getApps().length 
? getApp()
: initializeApp(firebaseConfig)

const db = getFirestore(app)


export default db