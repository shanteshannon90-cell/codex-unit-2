const formTag = document.getElementById("loginForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
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
  console.log(result);
}
