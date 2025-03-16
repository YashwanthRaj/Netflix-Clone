// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {addDoc, collection, getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwD3Vh7gYxoPVu-mXp7H8VaJr6iG75Q1M",
  authDomain: "netflix-clone-60860.firebaseapp.com",
  projectId: "netflix-clone-60860",
  storageBucket: "netflix-clone-60860.firebasestorage.app",
  messagingSenderId: "859742878147",
  appId: "1:859742878147:web:3e39fc7f26ae7826f4a576"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        await addDoc(collection(db, "user"), {
          uid: user.uid,
          name,
          authProvider: "local",
          email,
        });
    } catch (error) {
      console.log(error);
      alert(error);
    }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error){
    console.log(error);
    alert(error);
  }
}

const logout = async () => {
  signOut(auth);
}

export {auth, db, login, signup, logout};