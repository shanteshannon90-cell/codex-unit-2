// Level 14 — mini-project starter
// TODO: build a small form handler that prevents default, reads values via form.elements, validates, displays summary, and resets the form
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const username = form.elements.name.value;
  console.log(username);
  const textArea = form.elements.message.value;
  console.log(textArea);
  const range = form.elements.volume.value;
  console.log(range);
  const radio = form.elements.color.value;
  console.log(radio);
  const subscribed = form.elements.subscribe.checked;
  console.log(subscribed);

  if (form.elements.name.value.length >= 6) {
    const summary = document.getElementById("summary");
    summary.innerText = "Username meets requirement";
    form.reset();
  } else {
    summary.innerText = "Username does not meet requirement";
  }
}
