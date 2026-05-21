// Level 10 starter script
// TODO: POST pre-processed data, parse JSON response, and display three selected values.
// TODO: collect data, POST to echo server, parse response, and insert values into v1/v2/v3
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const data = {
    username: form.elements.username.value,
    email: form.elements.email.value,
  };
  const dataString = JSON.stringify(data);
  const response = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: dataString,
  });
  const result = await response.json();

  const username = result.username;
  const email = result.email;
  const formId = result.id;
  document.getElementById("v1").innerText = username;
  document.getElementById("v2").innerText = email;
  document.getElementById("v3").innerText = formId;
}
