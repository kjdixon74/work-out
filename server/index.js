import express from "express";

const app = express();
const port = 3001;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Express app listening on port ${port}`);
});

// left off here! check out express.Router()...
