// Level 10 — form-elements starter
// TODO: assign a named function to form.onsubmit that reads a text input value
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  console.log(formTag.elements.message.value);
}
