import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBL_oRLiRV5fLNwnrnuef2OYGya6AvvPvU",
  authDomain: "mitproject-b7c1e.firebaseapp.com",
  projectId: "mitproject-b7c1e",
  storageBucket: "mitproject-b7c1e.appspot.com",
  messagingSenderId: "1006249487321",
  appId: "1:1006249487321:web:40251368c4c3e1b89807c8",
  measurementId: "G-ECVKJBZEYD"
};

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};