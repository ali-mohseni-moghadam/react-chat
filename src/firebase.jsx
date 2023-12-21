import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDtg7D1AecxH5SDHI6mz3RORHG6mRCIhxs",
    authDomain: "reactgram-68999.firebaseapp.com",
    projectId: "reactgram-68999",
    storageBucket: "reactgram-68999.appspot.com",
    messagingSenderId: "524458215509",
    appId: "1:524458215509:web:e1878228234dabff4d6cdc",
  })
  .auth();
