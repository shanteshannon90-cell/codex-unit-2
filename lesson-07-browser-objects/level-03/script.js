// Level 03 — innerText starter
// TODO: select an element (e.g. document.getElementById('desc'))
// TODO: console.log the previous innerText, set a new innerText, then log the new value

// Scaffold:
// const el = document.getElementById('desc');
// console.log('before:', el && el.innerText);
// // TODO: set el.innerText = '...';
// console.log('after:', el && el.innerText);
const descriptive = document.getElementById("desc");
console.log(descriptive.innerText);
descriptive.innerText = "hello world";
console.log(descriptive.innerText);
