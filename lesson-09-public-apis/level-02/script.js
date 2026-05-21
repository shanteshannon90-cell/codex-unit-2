const formTag = document.getElementById("loginForm");
formTag.onsubmit = handleSubmit;
const error = document.getElementById("error");
const success = document.getElementById("success");

async function handleSubmit(event) {
  event.preventDefault();
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
  if (!response.ok) {
    error.innerText = "Invalid Credentials";
    formTag.reset();
  } else {
    success.innerText = "Logged in";
    formTag.reset();
  }
}
