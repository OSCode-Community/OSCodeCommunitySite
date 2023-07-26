import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// web app's Firebase configuration
const firebaseConfig = {
 
  apiKey: "AIzaSyDqOmdqmsGNhDOrjy_xEIjZ-JnKq7gMBlE",
  authDomain: "my-noob-7739a.firebaseapp.com",
  databaseURL: "https://my-noob-7739a-default-rtdb.firebaseio.com",
  projectId: "my-noob-7739a",
  storageBucket: "my-noob-7739a.appspot.com",
  messagingSenderId: "829264938526",
  appId: "1:829264938526:web:86fa140189c90fcfcbd00f",
  measurementId: "G-SLHR6BV766"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

export { database, auth };
