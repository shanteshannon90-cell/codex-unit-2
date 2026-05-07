// Level 09 — event.target starter
// TODO: inside submit handler inspect event.target and event.currentTarget
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  console.log(formTag.id);
}
