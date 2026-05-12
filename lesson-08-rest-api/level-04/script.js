// Level 04 starter script
// TODO: Await fetch and call response.json() to parse the body.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
async function handleSubmit(event) {
  event.preventDefault();
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json;
  const result = document.getElementById("result");
  result.innerText =
    "Parsing organizes input data and organzies it into structured data like objects or text.";
}
