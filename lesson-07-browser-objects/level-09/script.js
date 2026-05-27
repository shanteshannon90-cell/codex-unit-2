// Level 09 — event.target starter
// TODO: inside submit handler inspect event.target and event.currentTarget
console.log("script loaded");
const formTag = document.getElementById("sample-form");
formTag.onsubmit = handleSubmit;
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  console.log(event.target);
  console.log(event.currentTarget);
  const username = form.elements.username.value;
  console.log(username);
}
