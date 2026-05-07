// Level 11 — textarea-range starter
// TODO: in submit handler read textarea and range values via form.elements and convert range with Number()
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const textArea = form.elements.message.value;
  const volume = form.elements.volume.value;
  console.log(textArea);
  console.log(volume);
}
