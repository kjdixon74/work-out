// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb3cMzYz0xr2zJYCJLPPMVb_5UUKrYyCs",
  authDomain: "work-out-1dbdb.firebaseapp.com",
  projectId: "work-out-1dbdb",
  storageBucket: "work-out-1dbdb.appspot.com",
  messagingSenderId: "803330362481",
  appId: "1:803330362481:web:db933fe5939327ced3dfd0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

// Resume at firebase
