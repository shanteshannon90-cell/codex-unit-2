const form = document.getElementById("loginForm");
form.onsubmit = handleSubmit;
const error = document.getElementById("error");
const success = document.getElementById("success");

async function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  const data = {
    username: formTag.elements.username.value,
    password: formTag.elements.password.value,
  };
  const dataString = JSON.stringify(data);
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: dataString,
  });
  const result = await response.json();
  const message = result.message;
  const firstName = result.firstName;
  if (message) {
    error.innerText = message;
    success.innerText = "";
  } else if (firstName) {
    success.innerText = "You have logged in as " + firstName;
    error.innerText = "";
    form.reset();
  }
}
