const formTag = document.getElementById("loginForm");
const success = document.getElementById("success");
const errorEl = document.getElementById("error");

formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();

  try {
    const form = event.target;

    const data = {
      username: form.elements.username.value,
      password: form.elements.password.value,
    };

    const dataString = JSON.stringify(data);

    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: dataString,
    });

    const result = await response.json();
    const firstName = result.firstName;
    const message = result.message;

    if (firstName) {
      success.innerText = "You have logged in as " + firstName;
      formTag.reset();
    } else if (message) {
      errorEl.innerText = message;
      success.innerText = "";
    }
  } catch (error) {
    console.error("There is an error");
  }
}
