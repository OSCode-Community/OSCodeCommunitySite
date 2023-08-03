import { auth } from "../firebase/firebase.js";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

function googleLogin() {
  return signInWithPopup(auth, provider);
}

googleLogin.addEventListener("click", () => {
  googleLogin()
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
      handleLoginError(error);
    });
});

function handleLoginError(error) {
  const errorMessage = error.message;
  document.getElementById("error-msg").innerHTML = errorMessage;
}

togglePassword.addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

