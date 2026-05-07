// Level 12 — radio-checkbox starter
// TODO: in submit handler read radio via form.elements.color.value and checkbox via form.elements.subscribe.checked

const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const color = form.elements.color.value;
  const subscription = form.elements.subscribe.checked;
  console.log(color);
  console.log(subscription);
}
