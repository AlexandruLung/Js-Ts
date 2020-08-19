import fetch from "node-fetch";


const url = "https://localhost:8080/sum/1/2";

fetch(url)
  .then((body) => body.json())
  .then((json) => console.log("Sum: " + json));
