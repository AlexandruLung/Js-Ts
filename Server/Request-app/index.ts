import fetch from "node-fetch";

const sumURL = "http://localhost:8080/sum/2/3";
const substractionURL = "http://localhost:8080/substract/10/5";
const multiplicationURL = "http://localhost:8080/miltiply/10/10";
const divisionURL = "http://localhost:8080/divide/578/32";

fetch(sumURL)
  .then((body) => body.json())
  .then((json) => console.log("Sum: " + json));

fetch(substractionURL)
  .then((body) => body.json())
  .then((json) => console.log("Substraction: " + json));

fetch(multiplicationURL)
  .then((body) => body.json())
  .then((json) => console.log("Multiplication: " + json));

fetch(divisionURL)
  .then((body) => body.json())
  .then((json) => console.log("Division: " + json));