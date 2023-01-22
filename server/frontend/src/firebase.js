import firebase from 'firebase/app'
import 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyC-ogH0ZryFVzuk43Bkeb165EUSJnES5Bc",
//   authDomain: "citizen-feedback-d4629.firebaseapp.com",
//   projectId: "citizen-feedback-d4629",
//   storageBucket: "citizen-feedback-d4629.appspot.com",
//   messagingSenderId: "1052339034842",
//   appId: "1:1052339034842:web:d11746ef69005b8f3223e3",
//   measurementId: "G-3FCJQSMH97"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCUWpvdYD4nkmQYWMu091uRE2oDLKmS6RE",
  authDomain: "feedback-1c509.firebaseapp.com",
  projectId: "feedback-1c509",
  storageBucket: "feedback-1c509.appspot.com",
  messagingSenderId: "967161471332",
  appId: "1:967161471332:web:eb10c1f4f845c94d235a71",
  measurementId: "G-5DJ45178MY"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
