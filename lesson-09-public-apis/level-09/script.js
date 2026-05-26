const formTag = document.getElementById("challengeForm");
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
    const response = await fetch("https://dummyjson.com/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: dataString,
    });
    const result = await response.json();
    const username = result.username;
    const message = result.message;
    const success = document.getElementById("success");
    const error = document.getElementById("error");
    if (username) {
      success.innerText = "You are logged in as: " + username;
      error.innerText = "";
    } else if (message) {
      error.innerText = message;
      success.innerText = "";
    }
  } catch (error) {
    console.log("An error has occurred");
  }
}
