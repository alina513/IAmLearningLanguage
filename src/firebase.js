
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';




const firebaseConfig = {
  apiKey: "AIzaSyBNBSO0UuTlENfScxYdIBtLeOWbnX_rUmQ",
  authDomain: "iamlearninglanguage-dad5a.firebaseapp.com",
  databaseURL: "https://iamlearninglanguage-dad5a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "iamlearninglanguage-dad5a",
  storageBucket: "iamlearninglanguage-dad5a.appspot.com",
  messagingSenderId: "736682445433",
  appId: "1:736682445433:web:f60656d20f324bba3b62a8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase();