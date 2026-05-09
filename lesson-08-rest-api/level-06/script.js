// Level 06 starter script
// TODO: Use form.elements (by index) to collect input values into a plain object.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const username = form.elements[0].value;
  const email = form.elements[1].value;
  const data = {
    username: username,
    email: email,
  };
}
