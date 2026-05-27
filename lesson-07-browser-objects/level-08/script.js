// Level 08 — preventDefault starter
// TODO: update your submit handler to call event.preventDefault() before other logic
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
function handleSubmit(event) {
  event.preventDefault();
  console.log(
    "Confirm logs remain visible after submit when navigation is prevented",
  );
}
