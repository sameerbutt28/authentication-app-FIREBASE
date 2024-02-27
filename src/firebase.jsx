// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
                 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOuc4-OUCPmTVnc15Uu18bZtsC20ncQDI",
  authDomain: "auhentication-app-a896e.firebaseapp.com",
  databaseURL: "https://auhentication-app-a896e-default-rtdb.firebaseio.com",
  projectId: "auhentication-app-a896e",
  storageBucket: "auhentication-app-a896e.appspot.com",
  messagingSenderId: "1037162023200",
  appId: "1:1037162023200:web:5d8fa67ce2b154fe49af45",
  measurementId: "G-T43D1W3XVJ"
};
   
//database code
function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase(); //not to call getdata base function mulliple times we make a vatiable of it.
  const reference = ref(db, "users/" + userId); // we have to add users so db and passing the path.
  // Initialize Firebase

  set(reference, {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}
writeUserData("sammy28", "sameer", "buttjee@gmail.com", "myImageUrl");

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
