import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBg64dUe7J7UgPFQGZUIojVcvVfjgnu5ck',
  authDomain: 'crwn-clothing-db-v2-7a99e.firebaseapp.com',
  projectId: 'crwn-clothing-db-v2-7a99e',
  storageBucket: 'crwn-clothing-db-v2-7a99e.appspot.com',
  messagingSenderId: '719724647598',
  appId: '1:719724647598:web:6924ead09c982a02d2893f',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
