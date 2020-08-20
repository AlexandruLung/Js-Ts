import fetch from'node-fetch'

const sumURL="https://localhost:8080.dog/woof.json"
fetch(sumURL)
  .then((body) => body.json())
  .then((json) => console.log("Sum: " + json));
