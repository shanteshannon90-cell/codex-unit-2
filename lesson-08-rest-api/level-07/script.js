// Level 07 starter script
// TODO: Build a data object from form.elements and use fetch POST to https://api.jsoning.com/mock/public/users
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    username: form.elements.username.value,
    email: form.elements.email.value,
  };
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "POST",
    body: data,
  });
  const result = document.getElementById("result");
  result.innerText =
    "Data was attached to the request by using the POST method and data body property inside of an object within the fetch response.";
}
