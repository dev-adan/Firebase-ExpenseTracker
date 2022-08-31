import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIzl49l2CfXc1UYy-anXJQSYbgkV4kM8g",
    authDomain: "mymoney-7bb48.firebaseapp.com",
    projectId: "mymoney-7bb48",
    storageBucket: "mymoney-7bb48.appspot.com",
    messagingSenderId: "876346401705",
    appId: "1:876346401705:web:ecb954f73ea925b36a9ab8"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const auth = getAuth(app);

  export {db,auth}