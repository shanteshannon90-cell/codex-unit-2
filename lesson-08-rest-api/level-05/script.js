// Level 05 starter script
// TODO: Fetch GET https://api.jsoning.com/mock/public/users, await response.json(), and read display the data.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

async function handleSubmit(e) {
  e.preventDefault();
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  const completed = document.getElementById("completed");
  const title = document.getElementById("title");
  const userId = document.getElementById("id");
  const isCompleted = data.completed;
  const titleName = data.title;
  const pageID = data.id;
  completed.innerText = "Is Completed: " + isCompleted;
  title.innerText = "Title: " + titleName;
  userId.innerText = "ID: " + pageID;
}
