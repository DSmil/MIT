import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDH1EBaX6OW4Qe553vmypoTl6EpOVTm7Ts",
  authDomain: "restaurantapplication-49909.firebaseapp.com",
  databaseURL: "https://restaurantapplication-49909-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "restaurantapplication-49909",
  storageBucket: "restaurantapplication-49909.appspot.com",
  messagingSenderId: "350578779926",
  appId: "1:350578779926:web:d54d43a61db31cf6e15237"
};

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};