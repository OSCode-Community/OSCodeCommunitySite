const firstName = "";
const surname = "";
const email = "";
const password = "";

function handleSubmit(e) {
  e.preventDefault();
  // PostData();
}

function handleChange(e) {
  if (e.target.type == "text") {
    if (e.target.name == "firstName") {
      firstName = e.target.value;
    } else if (e.target.name == "surname") {
      surname = e.target.value;
    }
  } else if (e.target.type == "email") {
    email = e.target.value;
  } else if (e.target.type == "password") {
    password = e.target.value;
  }
}

const PostData = () => {
  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    console.log({ html: "Invalid Email", classes: "#d32f2f red darken-2" });
    return;
  }
  fetch("http://localhost:3000/signup/signup", {
    method: "post",
    "Access-Control-Allow-Origin": "http://localhost:3000/signup/signup",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000/signup/signup",
    },
    body: JSON.stringify({
      fname: firstName,
      lname: surname,
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        console.log({ html: data.error, classes: "#d32f2f red darken-2" });
      } else {
        console.log(data);
      }
    });
};
