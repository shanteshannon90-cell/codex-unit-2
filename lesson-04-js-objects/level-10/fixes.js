// TODO: Fix common object errors (typos, undefined checks, unnamed functions) and export the fixed value/object.
// This starter intentionally assigns an anonymous function to an object property.
// Your task: give the function a name, then attach the named function to the object.

// Buggy starter (anonymous function assigned):
user.say = function () {
  return "hello " + user.name;
};

const user = {
  name: "Ava",
};

export default user;
