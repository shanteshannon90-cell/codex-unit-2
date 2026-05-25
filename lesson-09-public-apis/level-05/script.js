const formTag = document.getElementById("queryForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    category: form.elements.category.value,
    difficulty: form.elements.difficulty.value,
  };
  const queryString = new URLSearchParams(data);
  const response = await fetch(
    "https://the-trivia-api.com/v2/questions" + "?" + queryString,
  );
  const result = await response.json();
  const question = result[0].question.text;
  const output = document.getElementById("out");
  output.innerText = question;
}
