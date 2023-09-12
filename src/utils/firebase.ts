import { initializeApp } from 'firebase/app';
import { Auth, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import {
  VITE_FIREBASE_APIKEY,
  VITE_FIREBASE_AUTHDOMAIN,
  VITE_FIREBASE_DATABASEURL,
  VITE_FIREBASE_PROJECTID,
  VITE_FIREBASE_STORAGEBUCKET,
  VITE_FIREBASE_MESSAGINGSENDERID,
  VITE_FIREBASE_APPID,
  VITE_FIREBASE_MEASUREMENTID,
} from './constants';

const setupFirebase = (): {
  db: Firestore;
  auth: Auth;
  googleAuthProvider: GoogleAuthProvider;
} => {
  const firebaseConfig = {
    apiKey: VITE_FIREBASE_APIKEY,
    authDomain: VITE_FIREBASE_AUTHDOMAIN,
    databaseURL: VITE_FIREBASE_DATABASEURL,
    projectId: VITE_FIREBASE_PROJECTID,
    storageBucket: VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: VITE_FIREBASE_MESSAGINGSENDERID,
    appId: VITE_FIREBASE_APPID,
    measurementId: VITE_FIREBASE_MEASUREMENTID,
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const googleAuthProvider = new GoogleAuthProvider();

  return { db, auth, googleAuthProvider };
};

export default setupFirebase;
