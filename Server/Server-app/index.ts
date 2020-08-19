import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));


app.get("/sum/:firstParam/:secondParam", (request, response) => {
  response.send(
    `The result is :${
      parseInt(request.params.firstParam) + parseInt(request.params.secondParam)
    }`
  );
});
app.get("/substract/:firstParam/:secondParam", (request, response) => {
  response.send(
    `The result is :${
      parseInt(request.params.firstParam) - parseInt(request.params.secondParam)
    }`
  );
});
app.get("/divide/:firstParam/:secondParam", (request, response) => {
  response.send(
    `The result is :${
      parseInt(request.params.firstParam) / parseInt(request.params.secondParam)
    }`
  );
});
app.get("/multiply/:firstParam/:secondParam", (request, response) => {
  response.send(
    `The result is :${
      parseInt(request.params.firstParam) * parseInt(request.params.secondParam)
    }`
  );
});
app.get("/squareroot", (request, response) => {
  let first=request.body.firstNumber
  

  let sqRoot = Math.sqrt(first);
  response.json(sqRoot);
});

app.get("/pow", (request, response) => {
  let first=request.body.firstNumber
  let second=request.body.secondNumber

  let pow = Math.pow(first,second);
  response.json(pow);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
