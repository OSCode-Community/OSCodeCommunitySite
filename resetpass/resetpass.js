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