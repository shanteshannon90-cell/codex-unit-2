// Level 03 starter script
// TODO: Use async/await when calling fetch inside the submit handler.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
async function handleSubmit(event) {
  event.preventDefault();
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const result = document.getElementById("result");
  result.innerText =
    "Async means the function  will take some time to fully load returning a promise; await pauses execution until function is fully loaded and promise is fulfilled";
}
