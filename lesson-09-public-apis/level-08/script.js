const formTag = document.getElementById("jokeForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  console.log("button works");

  const data = {
    "api-key": "89b3b872d87c4f7ea0cd73055dc305be",
  };

  const queryString = new URLSearchParams(data);

  const response = await fetch(
    "https://api.humorapi.com/memes/random" + "?" + queryString,
  );

  const result = await response.json();

  const outputTag = document.getElementById("display");
  const description = result.description;
  const imageTag = document.getElementById("image");
  const src = result.image;
  outputTag.innerText = description;
  imageTag.src = src;
}
