const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
function handleSubmit(event) {
  // TODO: accept event and log a message mentioning 'onsubmit'
  console.log("onsubmit function called when the submit event takes place");
}
