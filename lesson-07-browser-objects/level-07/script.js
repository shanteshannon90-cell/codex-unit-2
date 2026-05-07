// Level 07 — onsubmit function starter
// TODO: implement a named handler that accepts event and logs a short explanation
// TODO: assign the handler to form.onsubmit (use the form's id in the HTML)
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
function handleSubmit(event) {
  // TODO: accept event and log a message mentioning 'onsubmit'
  console.log("onsubmit function called when the submit event takes place");
}
