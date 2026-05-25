const formTag = document.getElementById("queryForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    category: form.elements.categories.value,
    difficulty: form.elements.difficulties.value,
  };
  const queryString = new URLSearchParams(data);
  const response = await fetch(
    "https://the-trivia-api.com/v2/questions" + "?" + queryString,
  );
  const result = await response.json();
  const question = result[0].question.text;
  const questionTag = document.querySelector("#question");
  questionTag.innerHTML = "<h3>" + question + "</h3>";

  const choiceA = result[0].correctAnswer;
  const choiceTagA = document.querySelector("#choiceA");
  choiceTagA.innerHTML = "<h4>" + "A:)" + choiceA + "</h4>";

  const choiceB = result[0].incorrectAnswers[0];
  const choiceTagB = document.querySelector("#choiceB");
  choiceTagB.innerHTML = "<h4>"  + "B:)" + choiceB + "</h4>";

  const choiceC = result[0].incorrectAnswers[1];
  const choiceTagC = document.querySelector("#choiceC");
  choiceTagC.innerHTML = "<h4>" + "C:)" + choiceC + "</h4>";

  const choiceD = result[0].incorrectAnswers[2];
  const choiceTagD = document.querySelector("#choiceD");
  choiceTagD.innerHTML = "D:)" + choiceD;
}
