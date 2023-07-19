import { database, auth } from "../firebase/firebase.js";
import {
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Sign up with email and password
signUp.addEventListener("click", (e) => {
  e.preventDefault();

  var f_name = document.getElementById("f_name").value;
  var s_name = document.getElementById("s_name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Validation check
  if (f_name.length == 0) {
    document.getElementById("error-msg").innerHTML = "*First name is required!";
    return;
  } else if (s_name.length == 0) {
    document.getElementById("error-msg").innerHTML = "*Surname is required!";
    return;
  }
  document.getElementById("error-msg").innerHTML = "";

  // Move on with auth
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      set(ref(database, "users/" + user.uid), {
        email: email,
      }).then(() => (window.location.href = "/"));
    })
    .catch((error) => {
      // Handle errors here
      const errorCode = error.code;
      const errorMessage = error.message;

      document.getElementById("error-msg").innerHTML = errorMessage;
    });
});

// Sign Up with google
const provider = new GoogleAuthProvider();

googleSignup.addEventListener("click", (e) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      // Redirecting to the home page
      window.location.href = "/";
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      document.getElementById("error-msg").innerHTML = errorMessage;
    });
});

togglePassword.addEventListener("click", (e) => {
  if (document.getElementById("password").type == "password") {
    document.getElementById("password").type = "text";
  } else {
    document.getElementById("password").type = "password";
  }
});
