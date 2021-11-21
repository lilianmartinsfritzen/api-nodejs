const express = require("express");

const app = express();

app.listen(8080, () => console.log('Rodando na porta 8080'));

app.get("/", (request, response) => {
  return response.json({ message: "Hello World!" })
})
