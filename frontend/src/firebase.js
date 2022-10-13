import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC-ogH0ZryFVzuk43Bkeb165EUSJnES5Bc",
  authDomain: "citizen-feedback-d4629.firebaseapp.com",
  projectId: "citizen-feedback-d4629",
  storageBucket: "citizen-feedback-d4629.appspot.com",
  messagingSenderId: "1052339034842",
  appId: "1:1052339034842:web:d11746ef69005b8f3223e3",
  measurementId: "G-3FCJQSMH97"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
