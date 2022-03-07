import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAEJvGF0hTWWxet64iqCd3TsUvcV09eYxM",
  authDomain: "original-team-app-67613.firebaseapp.com",
  projectId: "original-team-app-67613",
  storageBucket: "original-team-app-67613.appspot.com",
  messagingSenderId: "873180365698",
  appId: "1:873180365698:web:40b47c7e8e5281597e859b",
  measurementId: "G-7591QECBJK",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
