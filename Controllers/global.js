import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js"
import { 
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"

import { 
  getFirestore,
  collection, 
  addDoc, 
  getDocs,
  doc,
  setDoc,
  getDoc,
  updateDoc
} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';

/////////////////////////////////////////////////////////////////////////
const firebaseConfig = {
  apiKey: "AIzaSyCEWRTYhF4tBPJCIcSe57F-MPDidIbPi1o",
  authDomain: "proyect-cloud-c8d38.firebaseapp.com",
  projectId: "proyect-cloud-c8d38",
  storageBucket: "proyect-cloud-c8d38.appspot.com",
  messagingSenderId: "717472757848",
  appId: "1:717472757848:web:0da046d401320bfd68722d",
  measurementId: "G-Y1LQ6YF1Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//gestiona la autenticacion del usuario
const auth = getAuth();
const db = getFirestore(app);

export const loginvalidation=(email,password)=>signInWithEmailAndPassword(auth, email, password);

export const Usercreate=(email, password)=>createUserWithEmailAndPassword(auth, email, password)


export const addcollection=(nombre,targeta,celular)=>
  addDoc(collection(db, "users"),{
    nombre,
    targeta,
    celular
});

export const getcollections=()=>
  getDocs(collection(db, "users"));


export const adduser=(identificaion,nombre,targeta,celular,image)=>
  setDoc(doc(db, "usuarios", identificaion), {
    identificaion,
    nombre,
    targeta,
    celular,
    image
  });
  
export const updateuser=(identificaion,nombre,targeta,celular)=>
  updateDoc(doc(db, "usuarios", identificaion), {
    identificaion,
    nombre,
    targeta,
    celular
  });
  
export const readuser=(identificaion)=>
  getDoc(doc(db, "usuarios", identificaion));