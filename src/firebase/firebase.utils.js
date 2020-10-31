import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCjaEQF5SIoxMiPhLhfpoKWufXXdsY6-iM",
  authDomain: "crwn-shop-fc50c.firebaseapp.com",
  databaseURL: "https://crwn-shop-fc50c.firebaseio.com",
  projectId: "crwn-shop-fc50c",
  storageBucket: "crwn-shop-fc50c.appspot.com",
  messagingSenderId: "657212245677",
  appId: "1:657212245677:web:d5f205a2823e37bc07e824",
  measurementId: "G-CFT59QDYV8",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
