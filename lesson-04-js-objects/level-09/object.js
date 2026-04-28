// TODO: Declare named functions then assign them as methods on the exported object.
// Example:
// function greet(name) { return 'Hi ' + name }
// const user = { name: 'Ava' }
// user.greet = greet
// export default user
function greet(name){
  return "hi " + name
}


const user = {
  name="Shante"
};
user.greet=greet
export default user;

console.log(greet);
