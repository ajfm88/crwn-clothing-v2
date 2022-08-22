// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBg64dUe7J7UgPFQGZUIojVcvVfjgnu5ck',
  authDomain: 'crwn-clothing-db-v2-7a99e.firebaseapp.com',
  projectId: 'crwn-clothing-db-v2-7a99e',
  storageBucket: 'crwn-clothing-db-v2-7a99e.appspot.com',
  messagingSenderId: '719724647598',
  appId: '1:719724647598:web:6924ead09c982a02d2893f',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
