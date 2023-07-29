import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDqOmdqmsGNhDOrjy_xEIjZ-JnKq7gMBlE",
  authDomain: "my-noob-7739a.firebaseapp.com",
  databaseURL: "https://my-noob-7739a-default-rtdb.firebaseio.com",
  projectId: "my-noob-7739a",
  storageBucket: "my-noob-7739a.appspot.com",
  messagingSenderId: "829264938526",
  appId: "1:829264938526:web:86fa140189c90fcfcbd00f",
  measurementId: "G-SLHR6BV766",
};

let app;
let database;
let auth;

try {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  database = getDatabase(app);
  auth = getAuth();
} catch (error) {
  console.error("Error initializing Firebase:", error.message);
}

// Export the initialized database and auth if they were successfully initialized
if (database && auth) {
  export { database, auth };
} else {
  console.error("Firebase initialization failed.");
}
