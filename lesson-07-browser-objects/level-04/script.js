// Level 04 — innerHTML starter
// TODO: select an element (e.g. document.getElementById('content'))
// TODO: log previous innerHTML, set a small markup string (e.g. <strong>), then log after value

const content = document.getElementById("content");
console.log(content.innerHTML);
content.innerHTML = "<p><strong>This is the new updated content</strong></p>";
console.log(content.innerHTML);
