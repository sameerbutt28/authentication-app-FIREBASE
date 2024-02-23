// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOuc4-OUCPmTVnc15Uu18bZtsC20ncQDI",
  authDomain: "auhentication-app-a896e.firebaseapp.com",
  projectId: "auhentication-app-a896e", 
  storageBucket: "auhentication-app-a896e.appspot.com",
  messagingSenderId: "1037162023200",
  appId: "1:1037162023200:web:5d8fa67ce2b154fe49af45",
  measurementId: "G-T43D1W3XVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


 export const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});