// Level 11 starter script
// TODO: Implement a complete flow: create form, collect values, POST to echo server, render response fields.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  // TODO: build data object, POST it, parse response, and display three response values
  const data = {
    firstName: form.elements.firstName.value,
    lastName: form.elements.lastName.value,
    email: form.elements.email.value,
  };
  const dataString = JSON.stringify(data);
  const response = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: dataString,
  });
  const results = await response.json();
  const firstName = results.firstName;
  const lastName = results.lastName;
  const email = results.email;

  const r1 = document.getElementById("r1");
  r1.innerText = "r1 :" + firstName;
  const r2 = document.getElementById("r2");
  r2.innerText = "r2 :" + lastName;
  const r3 = document.getElementById("r3");
  r3.innerText = "r3 :" + email;
}
