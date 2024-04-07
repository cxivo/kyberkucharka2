const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  console.log("someone connected! ");
  const msg = { text: "Helou!" };
  res.send(msg);
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
