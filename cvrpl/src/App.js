import picture from './Alaska.jpg';
import './App.css';
import Avatar from './Avatar.js';
import Navbar from './Navbar.js';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl4Z6JEWE6Z-QJjbxnlbtxMnTpDa2Vons",
  authDomain: "coverpool-c532b.firebaseapp.com",
  projectId: "coverpool-c532b",
  storageBucket: "coverpool-c532b.appspot.com",
  messagingSenderId: "1044728278050",
  appId: "1:1044728278050:web:1ef680c6a2b85306a8ee7b",
  measurementId: "G-NTYSVF7R3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleAuth = GoogleAuthProvider;
const provider = new GoogleAuthProvider();
const signIn = signInWithRedirect;

function App() {
  return (
    <div className="App">
      <Navbar auth={auth} provider={provider} signIn={signIn} googleAuth={googleAuth}/>
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
