const username = "";
const password = "";

const handleCahnge = (event) => {
  if(event.target.type == "text") {
    username = event.target.value;
  }
  else if(event.target.type == "password") {
    password = event.target.value;
  }
};

const passwordType = "password";

const passwordToggle = () => {
  if (passwordType === "password") {
    passwordType = "text";
  } else {
    passwordType = "password";
  }
};
