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

// Utility function to get input field values
function getInputValue(elementId) {
  return document.getElementById(elementId).value;
}

// Utility function to display error message
function displayErrorMessage(message) {
  document.getElementById("error-msg").innerHTML = message;
}

// Function for signing up with email and password
function signUpWithEmail() {
  const firstName = getInputValue("f_name");
  const lastName = getInputValue("s_name");
  const email = getInputValue("email");
  const password = getInputValue("password");

  // Validation check
  if (!firstName) {
    displayErrorMessage("*First name is required!");
    return;
  } else if (!lastName) {
    displayErrorMessage("*Surname is required!");
    return;
  }

  displayErrorMessage(""); // Clear error message

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
      const errorMessage = error.message;
      displayErrorMessage(errorMessage);
    });
}

// Function for signing up with Google
function signUpWithGoogle() {
  signInWithPopup(auth, new GoogleAuthProvider())
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
      const errorMessage = error.message;
      displayErrorMessage(errorMessage);
    });
}

// Event listeners
document.getElementById("signUp").addEventListener("click", (e) => {
  e.preventDefault();
  signUpWithEmail();
});

document.getElementById("googleSignup").addEventListener("click", (e) => {
  signUpWithGoogle();
});

document.getElementById("togglePassword").addEventListener("click", (e) => {
  const passwordInput = document.getElementById("password");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
