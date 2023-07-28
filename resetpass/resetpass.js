const oldpass = "";
const newpass = "";
var password = document.getElementById("password");
var password1 = document.getElementById("password1");
var passwderr = document.getElementById("passworderr");
var passwd1err = document.getElementById("password1err");
function handleSubmit(e) {
   console.log("called");
       // Validation check
   if(password.value =='')
  { passwderr.innerText = "*Old password is required!";}
  else if(password1.value =='')
  { passwderr.innerText = ""; passwd1err.innerText = "*New password is required!";}
  else
  {
   // PostData();
   passwd1err.innerText="";
   password.value='';
   password1.value='';
  }
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
