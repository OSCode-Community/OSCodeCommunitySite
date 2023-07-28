import { database, auth } from "../firebase/firebase.js";
import {
  update,
  ref,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Login with google
const provider = new GoogleAuthProvider();

googleLogin.addEventListener("click", (e) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);

      const userDetails = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      window.location.href = "/login/profile.html";

      // Redirecting to the home page
      // window.location.href = "/";
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
