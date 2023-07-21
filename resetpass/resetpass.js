const oldpass = "";
const newpass = "";

function handleSubmit(e) {
  e.preventDefault();
  // PostData();
}

function handleChange(e) {
  if (e.target.type == "password") {
    if (e.target.name == "oldpass") {
      oldpass = e.target.value;
    } else if (e.target.name == "newpass") {
      newpass = e.target.value;
    }
  }
}

togglePassword.addEventListener("click", (e) => {
  if (document.getElementById("password").type == "password") {
    document.getElementById("password").type = "text";
  } else {
    document.getElementById("password").type = "password";
  }
});

togglePassword.addEventListener("click", (e) => {
  if (document.getElementById("password1").type == "password") {
    document.getElementById("password1").type = "text";
  } else {
    document.getElementById("password1").type = "password";
  }
});
