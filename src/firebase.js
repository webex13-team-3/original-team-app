import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEJvGF0hTWWxet64iqCd3TsUvcV09eYxM",
  authDomain: "original-team-app-67613.firebaseapp.com",
  projectId: "original-team-app-67613",
  storageBucket: "original-team-app-67613.appspot.com",
  messagingSenderId: "873180365698",
  appId: "1:873180365698:web:40b47c7e8e5281597e859b",
  measurementId: "G-7591QECBJK",
}
// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
