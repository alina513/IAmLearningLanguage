// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


// const firebaseConfig = {
//   apiKey: "AIzaSyBNBSO0UuTlENfScxYdIBtLeOWbnX_rUmQ",
//   authDomain: "iamlearninglanguage-dad5a.firebaseapp.com",
//   projectId: "iamlearninglanguage-dad5a",
//   storageBucket: "iamlearninglanguage-dad5a.appspot.com",
//   messagingSenderId: "736682445433",
//   appId: "1:736682445433:web:f60656d20f324bba3b62a8"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyDRbPXhFkiqE1iNWzgGzwHFypPjx_F9PDU",
//   authDomain: "learnlingo-cd903.firebaseapp.com",
//   databaseURL: "https://learnlingo-cd903-default-rtdb.firebaseio.com/",
//   projectId: "learnlingo-cd903",
//   storageBucket: "learnlingo-cd903.appspot.com",
//   messagingSenderId: "903886079412",
//   appId: "1:903886079412:web:a958f3de2120a99d615ee1",
//   measurementId: "G-KVHZ6FKM1B"
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyDpEPqmZ3i0lnv4SrF7xZWAXmH-knpYZeo",
//   authDomain: "languages-1c8b6.firebaseapp.com",
//   projectId: "languages-1c8b6",
//   storageBucket: "languages-1c8b6.appspot.com",
//   messagingSenderId: "166244814466",
//   appId: "1:166244814466:web:61872cec5c0e3906d32e9b"
// };

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