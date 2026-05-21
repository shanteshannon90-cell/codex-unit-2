// Level 07 starter script
// TODO: Build a data object from form.elements and use fetch POST to https://api.jsoning.com/mock/public/users
// TODO: collect values via form.elements[0].value, form.elements[1].value, form.elements[2].value
// build a data object and post it with fetch; then set result.innerText explaining how data is attached

const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;
async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    username: form.elements.username.value,
    email: form.elements.email.value,
  };
  const dataString = JSON.stringify(data);
  const response = await fetch("https://api.jsoning.com/mock/public/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: dataString,
  });

  const result = document.getElementById("result");
  result.innerText =
    "A request is made thru the fetch function and the POST method retrieves and attaches the requested data ";
}
