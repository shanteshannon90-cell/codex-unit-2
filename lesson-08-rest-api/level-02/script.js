// Level 02 starter script
// TODO: Get & save the form element to `form`, attach onsubmit, and call event.preventDefault().
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
function handleSubmit(event) {
  event.preventDefault();
  const response = fetch("https://jsonplaceholder.typicode.com/todos/1");
  const result = document.getElementById("result");
  result.innerText =
    "The fetch function communicates and recieves information from the URL server.";
}
