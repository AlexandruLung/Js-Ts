import fetch from "node-fetch";

const sumURL = "http://localhost:8080/sum/2/3";
const substractionURL = "http://localhost:8080/substract/10/5";
const multiplicationURL = "http://localhost:8080/multiply/2/3";
const divisionURL = "http://localhost:8080/divide/578/32";
const powURL = "http://localhost:8080/pow";
const sqrtURL = "http://localhost:8080/squareroot";

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

const powParams = new URLSearchParams();
powParams.set("firstNumber", "2");
powParams.set("secondNumber", "15");

fetch(powURL, {
  method: "POST",
  body: powParams,
})
  .then((res) => res.json()) 
  .then((json) => console.log(`Pow: ${json}`));

const sqrtParams = new URLSearchParams();
sqrtParams.set("firstNumber", "4");

fetch(sqrtURL, {
  method: "POST",
  body: sqrtParams,
})
  .then((res) => res.json()) 
  .then((json) => console.log(`Square-root: ${json}`));
