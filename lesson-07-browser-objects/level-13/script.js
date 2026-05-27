// Level 13 — form-reset starter
// TODO: validate one field in submit handler, on success display summary and call form.reset()
const formTag = document.getElementById("sample-form");
formTag.onsubmit = handleSubmit;
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const username = document.getElementById("username");
  const results = document.getElementById("result");
  if (form.elements.username.value.length >= 6) {
    results.innerText = "Username meets requirements";
    form.reset();
  } else {
    results.innerText = "6 or more required";
  }
}
