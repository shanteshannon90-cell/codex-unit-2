// TODO: Default-export an object with nested properties.
// Example: export default { theme: { color: 'blue' } }

/* TODO: nested structure */
const lifeDashboard = {
  firstname: "Shante",
  lastname: "Shannon",
  age: 35,
  address: {
    city: "Statesville",
    state: "North Carolina",
  },
  theme:{
    color:"blue",
    color: "black",
    color:"pink",
  }
};
export default lifeDashboard.theme.color;
export default lifeDashboard.address;
