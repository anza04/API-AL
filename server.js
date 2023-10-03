const express = require('express');

const app = express();
const response = "{\"risposta\":\"ciao\"}"

app.get("/", (req, res) => {

  res.send(JSON.parse(response));
})

app.listen(3000, () => {
  console.log("Listening");
})